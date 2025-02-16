import {destroy, get, patch, post} from "@/composable/useApi.js";

export async function getProjects(pageQuery = '', filters = {}) {
    try {
        return await get('api/projects' + pageQuery, {params: filters}).then(res =>{
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

export async function showProject(id) {
    try {
        return await get('api/projects/' + id).then(res =>{
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

export async function storeProject(form) {
    try {
        return await post('api/projects', form).then(res =>{
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


export async function updateProject(form, id) {
    try {
        return await patch('api/projects/' + id, form).then(res =>{
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

export async function deleteProject(id) {
    try {
        return await destroy('api/projects/' + id).then(res =>{
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