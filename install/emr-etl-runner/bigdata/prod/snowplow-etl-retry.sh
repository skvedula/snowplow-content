### INSERT BELOW ENV VARS ###

RUNNER_PATH=~
LOADER_PATH=~
RUNNER_CONFIG=config.yml
RUNNER_RESOLVER=resolver.json
RUNNER_ENRICHMENTS=~/enrichments

# Run the ETL job on EMR
./snowplow-emr-etl-runner --config ${RUNNER_CONFIG} --resolver ${RUNNER_RESOLVER} --enrichments ${RUNNER_ENRICHMENTS} --skip staging
# ./snowplow-emr-etl-runner --config ${RUNNER_CONFIG} --resolver ${RUNNER_RESOLVER}

# Check the damage
ret_val=$?
if [ $ret_val -eq 3 ]
then
        echo "No Snowplow logs to process since last run, exiting with return code 0. StorageLoader not run"
        exit 0
elif [ $ret_val -ne 0 ]
then
    echo "Error running EmrEtlRunner, exiting with return code ${ret_val}. StorageLoader not run"
    exit $ret_val
fi

# If all okay, run the storage load too
./snowplow-storage-loader --config ${RUNNER_CONFIG} --skip analyze

# Check the damage
ret_val=$?
if [ $ret_val -eq 3 ]
then
        echo "No Snowplow data to write to storage, exiting with return code 0. SQL Runner not run"
        exit 0
elif [ $ret_val -ne 0 ]
then
    echo "Error running StorageLoader, exiting with return code ${ret_val}. SQL Runner not run"
    exit $ret_val
fi

# If all okay, run the SQL Runner
./sql-runner -playbook ./playbook/atomic/copy-events.yml -sqlroot /home/ec2-user/sql
./sql-runner -playbook ./playbook/qa/qa.yml -sqlroot /home/ec2-user/sql