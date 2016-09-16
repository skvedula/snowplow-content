DELETE FROM qa.sessions
WHERE date >= DATEADD(week, -1, CURRENT_DATE);

INSERT INTO qa.sessions (
  WITH step_1 AS (

      SELECT 
        domain_userid,
        collector_tstamp as tstamp
      FROM public.events
      WHERE collector_tstamp > DATEADD(week, -1, CURRENT_DATE)
      AND app_id = 'nord.com'

    ), step_2 AS (

      SELECT
        domain_userid,
        tstamp,
        LAG(tstamp, 1) OVER (PARTITION BY domain_userid ORDER BY tstamp) AS previous_tstamp
      FROM step_1

    ), step_3 AS (

      SELECT
        domain_userid,
        tstamp,
        previous_tstamp,
        CASE 
          WHEN EXTRACT(EPOCH FROM (tstamp - previous_tstamp)) > 60*30 THEN 1 
          WHEN EXTRACT(EPOCH FROM (tstamp - previous_tstamp)) < 60*30 AND datediff(min, tstamp, Cast(trunc(dateadd(day,1,tstamp)) as timestamp)) between 0 and 30 THEN 1 
          ELSE 0
        END AS new_session
      FROM step_2

    ), step_4 AS (

      SELECT
        domain_userid,
        tstamp,
        previous_tstamp,
        new_session,
        SUM(new_session) OVER (PARTITION BY domain_userid ORDER BY tstamp ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS session_idx
      FROM step_3

    )

    select
    MIN(tstamp),
    COUNT(distinct(domain_userid || '-' || session_idx))
    from step_4
    group by trunc(tstamp)
    order by trunc(tstamp)
);