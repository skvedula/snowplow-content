# Snowplow-Content
Master repository for scripts/code/configs needed to standup a Snowplow environment.

This project is split into several parts:

1. **dashboard**
2. **install**
3. **jsonpaths**
4. **lambda**
5. **schemas**
6. **sql**
7. **sqlrunner**
8. **tags**
9. **templates**
10. **trackers**


###For compiling tags:
1. navigate into the tags/ folder
2. install all npm modules (npm install from tags directory)
3. create a directory called dist (mkdir dist)
4. open package.json to get names of build scripts
5. type `npm run packagename` example: `npm run CreditCardApplication`
6. this will create a uglified/minified file inside the dist/ folder
7. copy this to signal and change to preview mode
8. continue for remaining tags