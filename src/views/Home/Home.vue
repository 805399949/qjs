<template>
    <div class="home-wrap">
        <v-header :selected="'home'"></v-header>
        <div class="carouse">
            <Carousel autoplay v-model="value2" loop>
                <CarouselItem>
                    <div class="one">1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="one">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="one">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="one">4</div>
                </CarouselItem>
            </Carousel>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>

import Header from '@/views/Public/header';
import Footer from '@/views/Public/footer';

export default {
    name: 'Home',
    components: {
        vHeader: Header,
        vFooter: Footer,
    },
    data() {
        return {
            value2: 0,
        };
    },
}
</script>

<style lang="less" scoped>
    .home-wrap {
        .carouse {
            .one {
                height: 300px;
                line-height: 300px;
                text-align: center;
                color: #fff;
                font-size: 20px;
                background: #506b9e;
            }
        }
    }
</style>
