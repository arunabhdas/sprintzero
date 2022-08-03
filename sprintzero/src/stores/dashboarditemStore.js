// @ts-nocheck
import {writable} from 'svelte/store';

export const dashboarditems = writable([]);

export const addDashboardItem = (text) => {
    dashboarditems.update((cur) => {
        const newDashboardItems = [...cur, {text, completed: false, id: Date.now()}];
        return newDashboardItems;
    })
}

export const deleteDashboardItem = (id) => {
    dashboarditems.update(dashboarditems =>  dashboarditems.filter(dashboarditem => dashboarditem.id !== id));
}

export const toggleDashboardItemCompleted = (id) => {
    dashboarditems.update(dashboarditems => {
        let index = -1;
        for (let i = 0; i < dashboarditems.length; i++) {
            if (dashboarditems[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            dashboarditems[index].completed = !dashboarditems[index].completed;
        }
        return dashboarditems;
    })
}