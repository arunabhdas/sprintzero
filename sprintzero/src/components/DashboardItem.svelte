<script>
// @ts-nocheck

import { deleteDashboardItem, toggleDashboardItemCompleted } from "../stores/dashboarditemStore";
    export let dashboarditem;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
    <input 
    name="completed"
    type="checkbox"
    checked={dashboarditem.completed}
    on:change={() => toggleDashboardItemCompleted(dashboarditem.id)}
    class="mr-2 form-checkbox h-5 w-5"/>
    <span class="{`flex-1 text-gray-800 ${dashboarditem.completed ? 'line-through' : ''}`}">{dashboarditem.text}</span>
    <button
    type="button"
    class="text-sm 
    bg-pink-500 
    hover:bg-pink-700 
    text-white 
    font-bold 
    py-1 
    px-2 
    rounded 
    focus:outline-none 
    focus:shadow-outline"
    on:click="{() => deleteDashboardItem(dashboarditem.id)}">
    Delete
    </button>
</li>