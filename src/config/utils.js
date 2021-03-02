
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 读取sessionStorage的信息
 */
export const getSession = (that) => {
    let info = sessionStorage.getItem("adminInfo");
    if(!JSON.parse(info).Vipusnm){
        that.$router.push('/')
    }else {
        that.$store.commit('saveAdminInfo',JSON.parse(info));
    }
}

export const delUndefined = (ob) => {
    for (let e in ob) {
        if (typeof(ob[e]) === 'undefined' || ob[e] === null || ob[e] === "") {
            delete ob[e];
        }
        else if (ob[e].constructor === Object) {
            if (Object.keys(ob[e]).length === 0) {
                delete ob[e];
            } else {
                delUndefined(ob[e]);
            }
        }
        else if (ob[e].constructor === Array) {
            ob[e].map(function (seg) {
                if (typeof(seg) === 'object') {
                    delUndefined(seg);
                }
            });
        }
    }
    return ob;
}