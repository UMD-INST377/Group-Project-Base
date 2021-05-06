import { classToInvokable } from "sequelize/types/lib/utils";

function creatTable(json){
    if(json==null||json.length === 0) return;
    
    function creatTableHead(table){
        let creatTableHead=table.createTHead();
        let row=tableHead.insertRow();
    
    for(key in json["data"][0]){
        let th=document.createElement('th');
        let label=document.createTextNode(key);
        th.appendChild(label);
        row.appendChild(th);
    }
    console.log('done making table head')
}
    function creatTableBody(table){
        for (key in json["data"]){
            let row=table.insertRow();
            for(key2 in json["data"][key]){
                let cell=row.insertCell();
                let text=document.createTextNode(json["data"][key][key2]);
                classToInvokable.appendChild(text);
            }
        }
        console.log('donne makeing table body');
    }
        let table = document.createElement("table");
        document.body.appendChild(table);
        createTableBody(table);
        createTableHead(table);
        table.setAttribute("class", "table is-borded");
}