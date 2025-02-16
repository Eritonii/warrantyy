import {destroy, get, patch, post} from "@/composable/useApi.js";

export async function getTasks(pageQuery = '', filters = {}) {
    try {
        return await get('api/tasks' + pageQuery, {params: filters}).then(res =>{
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

export async function showTask(id) {
    try {
        return await get('api/tasks/' + id).then(res =>{
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

export async function storeTask(form) {
    try {
        return await post('api/tasks', form).then(res =>{
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


export async function updateTask(form, id) {
    try {
        return await patch('api/tasks/' + id, form).then(res =>{
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

export async function deleteTask(id) {
    try {
        return await destroy('api/tasks/' + id).then(res =>{
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

export async function reorderTask(form) {
    try {
        return await post('api/tasks/reorder', form).then(res =>{
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

export async function addUserToTask(form, id) {
    try {
        return await post('api/tasks/' + id + '/add-user', form).then(res =>{
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

export async function deleteUserFromTask(form, id) {
    try {
        return await post('api/tasks/' + id + '/delete-user', form).then(res =>{
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