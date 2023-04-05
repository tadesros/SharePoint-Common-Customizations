/* Working Link: ~site/SiteAssets/PdrModListView/createViewBtn.js */


(function () {  
 
    var overrideCtx = {};
    overrideCtx.Templates = {};
    overrideCtx.OnPostRender = [];

    overrideCtx.Templates.Fields =
    {
        'View': { 'View': renderButton }
        
    };

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);

})();

function renderButton(ctx){ 

    
    var btnTxt = ctx.CurrentItem["View"];
    var id = ctx.CurrentItem.ID;

    return "<input type='button' class='btnView' onclick='btnClick(" + id + ")' value='New Disp Record'" + 
    btnTxt + "'></input>";

}
function btnClick(id) {


 // alert("button " + id + " clicked");

  //  window.location = "http://rocsps/sites/GSTIntranet/IT/Personnel_Requisition/Lists/Personnel%20Requisition/DispForm.aspx?ID="+id+"";
    ShowDialogView(id);

}
/*  View the URL for this Button pass in the id of the item */
function ShowDialogView(id)
     {
     var options =
     {
         autoSize: true,
         allowMaximize: true,
         title: 'Display View',
         showClose: true,
         url:"http://rocsps/sites/GSTIntranet/QUALITY/RMA/Lists/RMA/DispForm.aspx?ID="+id+""
 
     };
     SP.UI.ModalDialog.showModalDialog(options);
 }