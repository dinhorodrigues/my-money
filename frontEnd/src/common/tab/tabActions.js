export function selectTab(tabId){
 
    return{
        type:'TAB_SELECTED',
        payload:tabId
    }
}
export function showTabs(...tabids){
    const tabsShow = {}///obejeto vazio
    tabids.forEach(e => tabsShow[e] = true)
    return{
        type: 'TAB_SHOWED',
        payload: tabsShow
    }
}
