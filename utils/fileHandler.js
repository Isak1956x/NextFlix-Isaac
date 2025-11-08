import fs from 'fs';
export function GetAllDataFromFile (dataPath, callBack)  
{
    fs.readFile(dataPath, function(err, data)
    {
        if (err)
        {
            callBack([]);
        }
        else
        {
            callBack(JSON.parse(data));
        }
    });
};

export function SaveDataInFile (dataPath, data) 
{
    fs.writeFileSync(dataPath, JSON.stringify(data)), function(err, data)
    {
        if (err)
        {
            console.log("Error saving data", err);
        }
    };
};

