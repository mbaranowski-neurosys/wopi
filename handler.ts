'use strict';
import { DetailedFile } from './src/models/DetailedFile';
import * as utils from './src/Utils/WopiUtil';
import { checkFileInfo as checkFileInfoService } from './src/Services/CheckFileInfo';

export async function checkFileInfo(event, context, callback) {
  const value = await checkFileInfoService();
  context.succeed(value);
}

export function getFile(event, context, callback) {
  //TODO
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