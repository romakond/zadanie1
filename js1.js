const Wszystko = {
     template: 
     ` <div>
     <div class="resullinki">
                 
     <div class="temat">
            <a href="#"> Lorem ipsum dolor sit amet consectetur ad</a> 
     </div>
     <div class="linki_green">
             <a href="#">  https://www.x-kom.pl x-kom  Telefony i GPS  Akcesoria do dronów</a> 
     </div>
     <div class="opis">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam adipisci, tempore incidunt, quidem iure dolorem mollitia qui dicta minus sunt. Ipsa itaque, consequuntur maiores minus quis dolores delectus voluptatem!
     </div>
        </div>
        <div class="resullinki">
         <div class="temat">
                <a href="#"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</a> 
         </div>
         <div class="linki_green">
                 <a href="#">  https://www.x-kom.pl x-kom  Telefony i GPS  Akcesoria do dronów</a> 
         </div>
         <div class="opis">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ab laudantium dolores perspiciatis quos eveniet enim, officia qui obcaecati officiis quisquam natus necessitatibus debitis ut reprehenderit rerum atque harum.
         </div>
     </div>
     <div class="resullinki">
             <div class="temat">
                    <a href="#"> Lorem ipsum dolor sit amet consectetur ad</a> 
             </div>
             <div class="linki_green">
                     <a href="#">  https://www.x-kom.pl x-kom  Telefony i GPS  Akcesoria do dronów</a> 
             </div>
             <div class="opis">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ab laudantium dolores perspiciatis quos eveniet enim, officia q
             </div>
         </div>
         <div class="resullinki">
                 <div class="temat">
                        <a href="#"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</a> 
                 </div>
                 <div class="linki_green">
                         <a href="#">  https://www.x-kom.pl x-kom  Telefony i GPS  Akcesoria do dronów</a> 
                 </div>
                 <div class="opis">
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ab laudantium dolores perspiciatis quos eveniet enim, officia qui obcaecati officiis quisquam natus necessitatibus debitis ut reprehenderit rerum atque harum.
                 </div>
             </div>
    </div>
    `
    
    }
const Grafika = { template: '<div class="resullinki">Grafika</div>' }
const Filmy = { template: '<div class="resullinki">Filmy</div>' }
const Zakupy = { template: '<div class="resullinki">Zakupy</div>' }
const Wiadomości = { template: '<div class="resullinki">Wiadomości</div>' }
const Więcej = { template: '<div class="resullinki">Więcej</div>' }
const Ustawienia = { template: '<div class="resullinki">Ustawienia</div>' }
const Narzędzia = { template: '<div class="resullinki">Narzędzia</div>' }

const routes = [
  { path: '/Wszystko', component: Wszystko },
  { path: '/Grafika', component: Grafika },
  { path: '/Filmy', component: Filmy },
  { path: '/Zakupy', component: Zakupy },
  { path: '/Wiadomości', component: Wiadomości },
  { path: '/Więcej', component: Więcej },
  { path: '/Ustawienia', component: Ustawienia },
  { path: '/Narzędzia', component: Narzędzia }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')
