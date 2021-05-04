# IC2021: SAPUI5 app on Cloud Foundry + pipeline

## Setup the SAP Business Application Studio

1. Go to SAP Business Technology Platform (*InnovatorChallenge-2021*) and open your subaccount (*Advanced Track - Dev*): [subaccounts](https://cockpit.eu10.hana.ondemand.com/cockpit/#/globalaccount/724f2b9d-5057-43b4-9b47-2b4702833c2e/subaccounts)

2. In the menu on the left, please select *Instances and Subscriptions* and select the subscription *SAP Business Application Studio*

3. Click on the three blue dots and select *Go To Application*

4. After the SAP BAS has opened, please create a new Dev-Space for *SAP Fiori*

## Generate an empty SAPUI5 application

1. Click on *File* -> *New Project from Template*

2. Select *SAP Fiori Application* -> *Start*

3. In the dropdown menu *Application Type*, choose *SAPUI5 freestyle* and select *SAPUI5 Application* and hit *Next*

4. As data source, please select *Connect to an OData Service* since we will consume data from the public Northwind OData service. Set the OData service URL (https://services.odata.org/V2/Northwind/Northwind.svc/) in the input field below -> *Next*

5. Do <ins>not</ins> change the view name and leave it as *View1*

6. As project attributes, please set the following values:
    - Module Name: sapui5demoapp-xx
    - Application Title: Innovator Challenge 2021 - Demo SAPUI5-App
    - Application Namespace: *leave empty*
    - Description: Demo application for Innovator Challenge 2021
    - Add deployment configurations: Yes

    Press *Next* to continue.

7. On the next page *Deployment Configuration*, select *Cloud Foundry* as target. For the destination please choose *backend - https://service.odata.org/*

    Press *Finish* to continue.

## Configure the application router

1. Open the recently created project: *Files* - *Open Workspace* - *projects* - *sapui5demoapp-xx*

2. Open *xs-app.json* (please wait a few minutes until the file is generated)

3. Add the following code snippet to the routes in <ins>third</ins> place

```javascript
    {
        "source": "^/V2/(.*)",
        "authenticationType": "none",
        "destination": "backend"
    }
```

## Show the Northwind products in a list

1. Open `webapp/view/View1.view.xml`

2. Insert the following code snippet between the content tags
```xml
<List items="{/Products}">
    <StandardListItem title="{ProductName}"/>
</List>
```

3. Run the application using the command `npm start`

## Initialize GitHub Tools repository

1. Make sure that you have a terminal window opened on root level of your project

2. Initialize a new git repository by executing the command `git init`

3. Please open [github.tools.sap](https://github.tools.sap/) and create a new repository with the name *sapui5demoapp-xx*

4. Now add all code changes to the staging area with `git add .` and commit them by `git commit -m "initial commit"`

5. Add your remote repository: `git remote add origin https://github.tools.sap/<SAP_USER>/sapui5demoapp-<TEAM_NUMBER>.git`

6. Push the changes to your created repository: `git push -u origin master`

## Relevant links

GitHub-Tools:
- [Reference repository (initial SAPUI5 app)](https://github.tools.sap/D070317/ic2021-devops-learning-labs/tree/chapter1-basic-sapui5-app)
- [Request a technical user for GitHub-Tools](https://technical-user-management.github.tools.sap/)
- [Webhook setup guide](https://github.tools.sap/D070317/ic2021-devops-learning-labs/blob/master/webhook-setup.pdf)

SAP BTP subscriptions:
- [Business Application Studio](https://ic-adv-dev.eu10cf.applicationstudio.cloud.sap/index.html)
- [SAP Cloud Transport Management](https://ic-adv-dev.ts.cfapps.eu10.hana.ondemand.com/main/webapp/index.html)
- [SAP Continuous Integration & Delivery](https://ic-adv-dev.cicd.cfapps.eu10.hana.ondemand.com/ui/index.html)

Jenkins-as-a-Service:
- [Two-Factor Authentication for JaaS](https://accounts.sap.com/ui/protected/profilemanagement)
- Team-xx JaaS: https://icteamXXXX.jaas-gcp.cloud.sap.corp/

### Further links

- [Pipeline extensibility](https://www.project-piper.io/extensibility/)
- [Initial cTMS setup](https://help.sap.com/viewer/7f7160ec0d8546c6b3eab72fb5ad6fd8/Cloud/en-US/66fd7283c62f48adb23c56fb48c84a60.html)
