'use strict';
import { DetailedFile } from './src/models/DetailedFile';
import * as utils from './src/Utils/WopiUtil';
import { checkFileInfo as checkFileInfoService } from './src/Services/CheckFileInfo';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as url from 'url';

export async function checkFileInfo(event, context, callback) {
  const value = await checkFileInfoService();
  context.succeed({
    statusCode: 200,
    body: JSON.stringify(value)
  });
}

export function getFile(event, context, callback) {
  https.get(url.parse('https://calibre-ebook.com/downloads/demos/demo.docx'), function(res) {
      var data = [];
      res.on('data', function(chunk) {
          data.push(chunk);
      }).on('end', function() {
          var buffer = Buffer.concat(data);
          console.log(buffer);
          context.succeed({
            statusCode: 200,
            headers: { 
              'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            },
            body: buffer.toString('base64'),
            isBase64Encoded: true,
          });
      });
  });
}








/*
export function wopi(event, context, callback) {
  
  console.log('Handling ' + event.method + ' request for file/folder id ' + event.id);

  let files = new Array<DetailedFile>();

  let docFile = new DetailedFile();
  docFile.BaseFileName = 'myDocFile.docx';

  let xlFile = new DetailedFile();
  xlFile.BaseFileName = 'myXLFile.xlsx';

  let pptFile = new DetailedFile();
  pptFile.BaseFileName = 'myPPTFile.pptx';

  files.push(docFile);
  files.push(xlFile);
  files.push(pptFile);

  utils.PopulateActions(files, (actions) => {
    console.log(actions);
    context.succeed({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello from typescript',
        files,
        actions,
      }),
    });
  });

};

*/