# Create a simple SAPUI5-App for Deployment on Cloud Foundry

## Prepare Business Application Studio
1. Go to SAP Business Technology Platform (InnovatorChallenge-2021) and open your Sub-Account (e.g.: Advanced Track - Dev)

    - Global Account: https://cockpit.eu10.hana.ondemand.com/cockpit/#/globalaccount/724f2b9d-5057-43b4-9b47-2b4702833c2e/subaccounts

2. On the left side please select *Instances and Subscriptions* and look for an entry called *SAP Business Application Studio*

3. Click on the three blue dots and select Go To Application

4. After the SAP BAS started you have to create a Dev-Space for SAP Fiori

## Generate an empty SAPUI5-Application

1. Click on File - New Project from Template 

2. Select SAP Fiori Application --> Start

3. In the Dropdown Menu *Application Type* choose *SAPUI5 freestyle* and select SAPUI5 Application --> Next

4. As Data source please press *Connect to an OData Service* since we like to consume data from the Northwind OData-Service. The OData-Service URL should be added below --> Next (https://services.odata.org/V2/Northwind/Northwind.svc/)

5. Don't change the view name and leave it as View1

6. As Project Attributes please set the following values:
    - Module Name: sapui5demoapp-xx
    - Application Title: Innovator Challenge 2021 - Demo SAPUI5-App
    - Application Namespace: *leave empty*
    - Description: Demo Application for Innovator Challenge 2021
    - Add deployment configurations: Yes

    Press *Next* to continue

7. On the next page *Deployment Configuration* select *Cloud Foundry* as target and for the Destionation please choose *backend - https://service.odata.org/*

    Press *Finish* to continue.

8. Initialize a git repository with command: `git init`

9. Please open https://github.tools.sap/ and create a new repositry *innovator-challenge-2021-demoapp-xx*

10. Now add all changes to the staging area with `git add .` and commit them by `git commit -m "initial commit"`

11. Add your remote repository `git remote add origin https://github.tools.sap/D070317/nnovator-challenge-2021-demoapp-xx.git`

12. Push the changes to your created repository: `git push -u origin master`

## Configure Application Router

1. Open the recently created project: Files - Open Workspace - projects - sapui5demoapp-xx

2. Open xs-app.json (Maybe the file is not available. Please wait a few minutes)

3. Add the following code snippet to the routes in the third place:

```javascript
    {
        "source": "^/V2/(.*)",
        "authenticationType": "none",
        "destination": "backend"
    }
```

## Add List to show Products

1. Open the following file: webapp/view/View1.view.xml
2. Insert the following code snippet between the content tags
```xml
<List items="{/Products}">
    <StandardListItem title="{ProductName}"/>
</List>
```

3. Run the Application using the command: `npm start`


## Relevant Links

GitHub-Tools (technical user): https://technical-user-management.github.tools.sap/

BTP-Subscriptions:
- Business Application Studio: https://ic-adv-dev.eu10cf.applicationstudio.cloud.sap/index.html
- SAP Cloud Transport Management: https://ic-adv-dev.ts.cfapps.eu10.hana.ondemand.com/main/webapp/index.html
- Continuous Integration & Delivery: https://ic-adv-dev.cicd.cfapps.eu10.hana.ondemand.com/ui/index.html

GitHub (initial SAPUI5 App): https://github.tools.sap/D070317/innovator-challenge-2021-demoapp/tree/Chapter-1---Create-a-SAPUI5-App

Two-Factor: https://accounts.sap.com/ui/protected/profilemanagement

Jenkis as a Service: https://ic2021trainers.jaas-gcp.cloud.sap.corp/

### Further Links

Pipeline extensibility: https://www.project-piper.io/extensibility/

Initial cTMS Setup: https://help.sap.com/viewer/7f7160ec0d8546c6b3eab72fb5ad6fd8/Cloud/en-US/66fd7283c62f48adb23c56fb48c84a60.html
