import * as fs from 'fs';
import * as path from 'path';

const dataFilePath = path.join(__dirname, '../data/apiResponse.json');

export function saveApiResponse(data: any) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

export function getApiResponse(): any {
    const rawData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(rawData);
}
