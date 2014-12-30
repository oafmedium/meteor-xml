Package.describe({
  name: 'oaf:xml',
  summary: 'Meteor wrapper for the xml node package',
  version: '1.0.0',
  git: 'https://github.com/oafmedium/meteor-xml'
});

Npm.depends({
  "xml": '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('oaf:xml.js', 'server');
  if(api.export) api.export('Xml')
});
