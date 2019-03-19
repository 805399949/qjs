<template>
    <div>
        <Public></Public>
        <Forum></Forum>
    </div>
</template>

<script>

import Public from '@/views/Public'
import Forum from '@/views/Forum'

export default {
    name: 'Home',
    components: {
        Public,
        Forum
    }
}
</script>

