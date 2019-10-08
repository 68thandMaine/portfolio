# CircleCI Pipeline

My portfolio uses CircleCI as a Continuous Integration platform. Whenever code is pushed from develop to master CircleCI should:

1. Run all test in the program. If any test fails then the pipeline will not advance to step 2.
2. Run the build script to build the app.
3. Deploy the app to netlify.
