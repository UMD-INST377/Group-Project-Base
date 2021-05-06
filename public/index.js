import { classToInvokable } from "sequelize/types/lib/utils";

function createTable(json){
    if(json==null||json.length === 0) return;
    
    function createTableHead(table){
        let createTableHead=table.createTHead();
        let row=tableHead.insertRow();
    
    for(key in json["data"][0]){
        let th=document.createElement('th');
        let label=document.createTextNode(key);
        th.appendChild(label);
        row.appendChild(th);
    }
    console.log('done making table head')
}
    function createTableBody(table){
        for (key in json["data"]){
            let row=table.insertRow();
            for(key2 in json["data"][key]){
                let cell=row.insertCell();
                let text=document.createTextNode(json["data"][key][key2]);
                classToInvokable.appendChild(text);
            }
        }
        console.log('Done making table body');
    }
     
    //find pop 1-10
    albumPop.getAll = function(ap){
    post.findAll({
        where: {
            ALBUM_POPULARITY:{
                [Op.gte]: 10,
            }
        }
    });
}
        let table = document.createElement("table");
        document.body.appendChild(table);
        createTableBody(table);
        createTableHead(table);
        table.setAttribute("class", "table is-striped");
}