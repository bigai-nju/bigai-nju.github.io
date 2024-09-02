
function addtitle(item_title){
    //title
    var item_title_tag = $("<td>")
    item_title_tag.attr("colspan","2")
    item_title_tag.html(item_title)
    //console.log(item_title_tag)
    var item_title_row = $("<tr>")
    item_title_row.attr("class","item-title")
    item_title_row.append(item_title_tag)
    $("tbody").append(item_title_row)
}

function addinfo(info){
    //info
    var info_tag = $("<div>")
    info_tag.html(info)
    info_tag.attr("class","infobox")
    var info_tag_td = $("<td>")
    info_tag_td.attr("colspan","2")
    info_tag_td.append(info_tag)
    info_tag_row = $("<tr>")
    info_tag_row.append(info_tag_td)
    $("tbody").append(info_tag_row)
}

function geninfo(){
    info_list = $("#infolist")
    children_list = info_list.children()
    console.log(children_list)
    for(var i=0;i<children_list.length;){
        var item_title = children_list[i].innerHTML;
        //console.log(item_title)
        addtitle(item_title);
        console.log(children_list[i+1].tagName)
        var j=i+1;
        info = ""
        while(j<children_list.length && children_list[j].tagName!="H1"){
            info += "<p>" + children_list[j].innerHTML + "</p>"
            j++;
        }
        addinfo(info)
        i = j;
    }
    info_list.remove()
}

$(document).ready(geninfo)