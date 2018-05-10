import * as BPromise from "bluebird";
import { File } from '../models/File';

// import { Promise } from "bluebird";

export async function checkFileInfo() {
    return await new BPromise((resolve, reject) => {
        var file = new File();
        file.id = '1'
        file.BaseFileName = 'sample.docx';
        file.OwnerId = 'mb';
        file.Size = 300000;
        resolve(file);
    });
}


