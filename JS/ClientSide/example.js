"use strict"

const host = 'http://localhost:54114/',
    reportUrl = "Products",
    viewerOptions = {
        reportUrl: reportUrl, // The URL of a report that the Document Viewer loads when the application starts.  
        requestOptions: { // Options for processing requests from the Document Viewer. 
            host: host, // URI of your backend project.
            invokeAction: "/WebDocumentViewer/Invoke", // Action to enable CORS. 
        }
    }

ko.applyBindings({ viewerOptions });
