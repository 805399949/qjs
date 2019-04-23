<template>
    <div>
        <Table :columns="columns" :data="data"></Table>
    </div>
</template>

<style>
    .ivu-table td.colored {
        background-color: #2db7f5;
        color: #fff;
    }
</style>

<script>
    export default {
        data: function () {
            return {
                columns: [
                    {
                        title: "A",
                        className: "colored", // 此处有效
                        key: "a"
                    },
                    {
                        title: "B",
                        key: "b"
                    },
                    {
                        title: "C",
                        key: "c"
                    }
                ],
                data: [
                    {
                        a: "a",
                        b: "b",
                        c: "c"
                    }
                ]
            }
        },
        created() {
            // 此处有效
            this.columns[1].className = "colored";

            setTimeout(() => {
                // 此处无效
                this.columns[2].className = "colored";
            });
        }
    }
</script>