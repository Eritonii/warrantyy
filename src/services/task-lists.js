import {destroy, get, patch, post} from "@/composable/useApi.js";

export async function getTasklists(pageQuery = '', filters = {}) {
    try {
        return await get('api/tasklists' + pageQuery, {params: filters}).then(res =>{
            if(res.status === 200){
                    return res.data;
                }
                return null
            }
        );
    }catch (e) {
        return null;
    }
}

export async function showTasklist(id) {
    try {
        return await get('api/tasklists/' + id).then(res =>{
                if(res.status === 200){
                    return res.data;
                }
                return null
            }
        );
    }catch (e) {
        return null;
    }
}

export async function storeTasklist(form) {
    try {
        return await post('api/tasklists', form).then(res =>{
                if(res.status === 201){
                    return res.data;
                }
                return null
            }
        );
    }catch (e) {
        return null;
    }
}


export async function updateTasklist(form, id) {
    try {
        return await patch('api/tasklists/' + id, form).then(res =>{
                if(res.status === 200){
                    return res.data;
                }
                return null
            }
        );
    }catch (e) {
        return null;
    }
}

export async function deleteTasklist(id) {
    try {
        return await destroy('api/tasklists/' + id).then(res =>{
                if(res.status === 200){
                    return res;
                }
                return null
            }
        );
    }catch (e) {
        return null;
    }
}

export async function reorderTasklist(form) {
    try {
        return await post('api/tasklists/reorder', form).then(res =>{
                if(res.status === 200){
                    return res.data;
                }
                return null
            }
        );
    }catch (e) {
        return null;
    }
}
