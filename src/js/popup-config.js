$(function() {

	var popup;

	$('#Configure').click(function(e) {
		if ( popup )
			popup.cleanState();


		defaults.showOnExit = $('#showOnExit').val();
		defaults.showOnClick = $('#showOnClick').val();
		defaults.showOnMinutes = $('#showOnMinutes').val();

		defaults.pagesList = $('#pagesList').val();
		defaults.allPages = $('#allPages').val();
		popup = $('body').showOecdPopup(defaults);
	});

	var defaults = {
		"contentID": 123,

        "popupID": "popup-" + Math.floor(Math.random() * 89999 + 10000), //id for popup
        "cookie": "OecdSurvey", //cookie name
        "testUrl": "/terminalfour/SiteManager", //root of we site
        "liveMode": "Yes", //If yes show on Prod
        "allPages": "No", //If yes all pages
        "pagesList": "http://localhost:100/index.htm,http://localhost:100/show/", //list of page that popup will be shown
        "includeLatestDocuments": "Yes",
        "includeByDate": "Yes",
        "includeByCountry": "Yes",
        "includePublicationsDocuments": "Yes",
        "title": "title",
        "text": "text",
        "logo": "",
        "surveyUrl": "",
        "hideInternal": "No",
        "internalExternalImg": "http://t4-site-mgr.oecd.org/internalExternal.gif",
        "hideFooter": "No",
        "primarybgcolor": "#11629a",
        "secondrybgcolor": "#ffffff",
        "primarytextcolor": "#ffffff",
        "secondrytextcolor": "#333333",
        "showOnExit": 'No'
    };


    $('#showOnExit').val(defaults.showOnExit);
    $('#showOnClick').val(defaults.showOnExit);
    $('#showOnMinutes').val(defaults.showOnExit);
	$('#pagesList').val(defaults.pagesList);
	$('#allPages').val(defaults.allPages);
    
});