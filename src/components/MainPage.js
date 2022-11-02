import AOS from 'aos';
import "aos/dist/aos.css";

export default {
    name: 'Main',
    props:{},
    created(){
        AOS.init();
    },
    methods:{},
    data(){}
}