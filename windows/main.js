const {app,BrowserWindow,Menu}=require('electron');
function w(){Menu.setApplicationMenu(null);const win=new BrowserWindow({width:1100,height:800,autoHideMenuBar:true});win.loadFile('index.html')}
app.whenReady().then(w);
app.on('window-all-closed',()=>app.quit());
