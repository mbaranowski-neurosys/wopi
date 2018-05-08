'use strict';
import {Request, Response} from "express";
import { DetailedFile } from './src/models/DetailedFile';
import * as utils from './src/Utils/WopiUtil';

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

  utils.PopulateActions(files);

  console.log(files);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from typescript',
      files,
    }),
  };

  callback(null, response);
};
