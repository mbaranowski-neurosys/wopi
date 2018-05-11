import * as fs from 'fs'
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export default (event: APIGatewayEvent, context: Context, callback: Callback) => {
    if(!fs.exists('../../tmp-files/demo.docx')) {
        context(null, {
            statusCode: 200,
            body: 'DUPA',
        });
    }
    fs.readFile('../../tmp-files/demo.docx', (err, data) => {
        if(err) {
            context(null, {
                statusCode: 200,
                body: err,
            });
        }
        context(null, {
            statusCode: 200,
            headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
            body: data.toString('base64'),
            isBase64Encoded: true,
        });
    })
}
