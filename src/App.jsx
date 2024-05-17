import logo1 from "/src/assets/images/logo1.svg"
import card from "/src/assets/images/card.svg"
import rectangle from "/src/assets/images/rectangle.svg"
import circle from "/src/assets/images/circle.svg"
import snakeBlue from "/src/assets/images/snake-blue.svg"
import snakeOrange from "/src/assets/images/orange-snake.svg"
import perpleSnake from "/src/assets/images/perple-snake.svg"
import longSnakeOrange from "/src/assets/images/long-snake-orange.svg"
import moonBottom from "/src/assets/images/moon-bottom.svg"
import moonTop from "/src/assets/images/moon-top.svg"

import blueCircle from "/src/assets/images/blue-circle.svg"
import orangeCircle from "/src/assets/images/orange-circle.svg"

import blueCircle1 from "/src/assets/images/blue-circle-1.svg"
import blueCircle2 from "/src/assets/images/blue-circle-2.svg"
import pinkCircle from "/src/assets/images/pink-circle.svg"
import pinkSquare from "/src/assets/images/pink-square.svg"
import mixColorSqueare from "/src/assets/images/mix-color-square.svg"

import chat from "/src/assets/images/chat.svg"
import settings from "/src/assets/images/settings.svg"
import sloy from "/src/assets/images/sloy.svg"

import computerSloy from "/src/assets/images/computer-sloy.svg"

import bg1 from "/src/assets/images/bg1.svg"
import bg2 from "/src/assets/images/bg2.svg"
import bg3 from "/src/assets/images/bg3.svg"

import background from "/src/assets/images/background.svg"

import p1 from "/src/assets/images/p1.svg"
import p2 from "/src/assets/images/p2.svg"
import p3 from "/src/assets/images/p3.svg"
import p4 from "/src/assets/images/p4.svg"

import theMan from "/src/assets/images/theman.svg"
import theBoy from "/src/assets/images/theboy.svg"
import ok from "/src/assets/images/ok.svg"

import phoneIcon from "/src/assets/images/phone-icon.svg"
import emailIcon from "/src/assets/images/email-icon.svg"
import locationIcon from "/src/assets/images/location-icon.svg"
import grayEmail from "/src/assets/images/gray-email.svg"
import facebook from "/src/assets/images/facebook.svg"
import tweeter from "/src/assets/images/tweeter.svg"
import In from "/src/assets/images/in.svg"
import youtube from "/src/assets/images/youtube.svg"
import blueRectangle from "/src/assets/images/blue-rectangle.svg"
import right from "/src/assets/images/right.svg"

import "./App.css"
import Card from "./components/Card/Card"
import InfoCard from "./components/InfoCard/InfoCard"
import PersonCard from "./components/PersonCard/PersonCard"

import bgAll from '/src/assets/images/bg-all.svg'

function App()
{


  return (
    <main className=" bg-[#FAF2F6] w-[100%] flex flex-col mains">

      <nav className=" ph:bg-white  nav p-[10px] z-20 flex justify-center gap-12 items-center text-[16px] fixed top-0 right-0 w-[100%] ph:w-[100%] ph:justify-between ph:p-[10px]">
        <img src={logo1} alt="Logo" />
        <ul className="flex gap-8 items-center ph:hidden">
          <li><a href="#first">Почему мы?</a></li>
          <li><a href="#second">Наши продукты</a></li>
          <li><a href="#third">О нас</a></li>
          <li><a href="#four">Наша команда</a></li>
          <li><a href="#five">Контакты</a></li>
        </ul>
        <button className=" btn  rounded-md p-[5px_10px] font-[600] tracking-[1px]">Оставить заявку</button>
      </nav>

      {/* section 1 */}
      <section className=" bg-transparent flex items-end  relative  w-[100%] p-[150px_0_100px_245px] ph:items-start ph:p-[200px_10px_100px_10px]">


        {/* <img src={moonBottom} alt="." className=" absolute left-[190px] top-[490px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[550px] top-[455px] ph:hidden" /> */}
        {/* <img src={snakeOrange} alt="." className=" absolute left-[440px] top-[455px] ph:hidden" /> */}
        <img src={snakeBlue} alt="." className=" absolute left-[130px] top-[340px] ph:hidden" />
        {/* <img src={longSnakeOrange} alt="." className=" absolute left-[1360px] top-[480px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[1230px] top-[480px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[1450px] top-[380px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[750px] top-[140px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[1300px] top-[200px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[590px] top-[80px] ph:hidden" /> */}
        {/* <img src={moonTop} alt="." className=" absolute left-[500px] top-[110px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[430px] top-[140px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[350px] top-[115px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[250px] top-[100px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[210px] top-[160px] ph:hidden" /> */}
        {/* <img src={circle} alt="." className=" absolute left-[70px] top-[215px] ph:hidden" /> */}
        {/* <img src={rectangle} alt="." className=" absolute left-[100px] top-[110px] ph:hidden" /> */}


        <aside className="flex flex-col gap-7 w-[33%] ph:w-[100%]">
          <img src={logo1} alt="logo" className="w-[45%]" />
          <p className="text-[30px] leading-10 tracking-[2px] text-[#485466]">Ваш путь к финансовой свободе</p>
          <p>Готовы начать путь к финансовой независимости? Оставьте предварительную заявку прямо сейчас и получите эксклюзивные бонусы как подарок от нас.</p>
          <button className=" p-[5px_10px] rounded-md bg-gradient-to-r text-white from-[#C381DB] to-[#4E92F9] w-[40%] ph:w-[100%]">Оставить заявку</button>
        </aside>

        <img src={card} alt="card" className="w-[60%] absolute top-0 right-0 ph:w-[100%]" />
      </section>

      {/* section 2 */}
      <section className="flex flex-col gap-[10px] items-center relative ph:p-[10px]">

        <img src={blueCircle} alt="." className=" absolute left-[120px] top-[90px] ph:hidden" />
        <img src={orangeCircle} alt="." className=" absolute right-[0px] top-[0px] ph:hidden" />

        <p className="text-[35px] tracking-[1px] font-bold" id="first">Почему мы?</p>
        <p className="w-[40%] text-center ph:w-[100%]">Мы предлагаем молодежи возможность карьерного роста в своей практике. Мы также поддерживаем широкий спектр услуг для обеспечения удовлетворенности клиентов.</p>
        
        <aside className=" w-[70%] m-auto mt-[80px] grid grid-cols-3 gap-[20px] ph:grid-cols-1 ph:w-[100%]">
          <Card img={chat} title={"Всё для наших клиентов"} desc={"Наша философия базируется на простой идее: мы относимся к нашим клиентам так, как хотели бы, чтобы относились к нам."} />
          <Card img={sloy} title={"Все в одном месте"} desc={"Представьте, что ваше финансовое путешествие начинается здесь, но это только начало приключений."} />
          <Card img={settings} title={"Финансовой независимости"} desc={" У нас вы найдете инструменты и поддержку для достижения финансовых целей, не отказывая себе в ничем."} />
        </aside>

      </section>

      {/* section 3 */}
      <section className="flex flex-col gap-[10px] items-center my-[50px] relative ph:p-[10px]">

        <img src={blueRectangle} alt="." className=" absolute right-[120px] top-[120px] ph:hidden hidden" />

        <p className="text-[35px] tracking-[1px] font-bold" id="second">Наши продукты</p>
        <p className="w-[40%] text-center ph:w-[100%]">We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system</p>
        
        <aside className="flex justify-between items-center w-[70%] mt-[30px] ph:w-[100%] ph:flex-col gap-5">
          <img src={computerSloy} alt="picture" className="w-[45%] ph:w-[100%]" />
          <aside className="flex flex-col gap-4 items-start w-[40%] ph:w-[100%]">
            <p className="text-[40px] font-bold">Кредитная карта "Орзу"</p>
            <p className="text-gray-400">Представляем вам кредитную карту "Орзу" – инструмент, с помощью которого вы можете оплачивать всё, что пожелаете, а затем выплачивать по частям. </p>
            <p className="text-gray-400">Наши условия прозрачны, а уникальный график платежей делает использование карты еще более удобным.</p>
            <button className=" btn  rounded-md p-[5px_10px] font-[600] tracking-[1px] border-[1px] border-[#4E92F9]">Read More</button>
          </aside>
        </aside>

      </section>

      {/* section 4 */}
      <section className="flex items-end justify-between w-[70%] m-[auto] relative p-[300px_0] ph:p-[700px_10px_10px_10px] ph:w-[100%] ph:overflow-x-hidden">

        <img src={pinkCircle} alt="." className=" absolute right-[-100px] top-[400px] ph:hidden" />
        <img src={blueCircle2} alt="." className=" absolute left-[-450px] top-[100px] ph:hidden" />
        {/* <img src={mixColorSqueare} alt="." className=" absolute right-[-320px] top-[250px]" /> */}
        <img src={pinkSquare} alt="." className=" absolute left-[-220px] top-[700px] ph:hidden" />

        <aside className="flex flex-col gap-4 items-start w-[40%] ph:w-[100%]">
          <p className="text-[40px] font-bold">Noor Pay: не просто приложение, а образ жизни</p>
          <p className="text-gray-400">Noor Pay - это не просто приложение, это новый образ жизни. С нами вы получаете доступ к аналитике, всем финансовым возможностям, переводам, депозитам, кредитам и многому-многому другому, что раньше было недоступно для Таджикистана.</p>
          <p className="text-gray-400">Позвольте себе наслаждаться жизнью, пока мы берем на себя заботу о ваших финансах.</p>
          <button className=" btn  rounded-md p-[5px_10px] font-[600] tracking-[1px] border-[1px] border-[#4E92F9] ph:w-[100%]">Read More</button>
        </aside>

        <img src={bg1} alt="picture" className="absolute top-[150px] right-[80px]  z-10 ph:top-[80px] ph:left-[10px] ph:w-[55%]" />
        <img src={bg2} alt="picture" className="absolute top-[-50px] right-0 z-10 ph:top-[-50px] ph:right-[80px] ph:w-[65%]" />
        <img src={bg3} alt="picture" className="absolute top-[200px] right-[-220px] z-10 ph:top-0 ph:right-[-80px] ph:w-[100%]" />
      </section>

      {/* section 5 */}
      <section className=" flex flex-col gap-[10px] items-center mt-[100px] relative ph:p-[10px] ph:mt-[30px]">

        <img src={perpleSnake} alt="." className=" absolute right-[80px] top-[460px] ph:hidden" />
        <img src={blueCircle2} alt="." className=" absolute right-[0px] top-[-400px] ph:hidden" />
        
        <p className="text-[35px] tracking-[1px] font-bold" id="third">О нас </p>
        <p className="w-[55%] text-center ph:w-[100%]">Мы - проект Noor, ваш надежный партнер в финансах. Наша цель - предоставить инструменты для успешного управления финансами и достижения ваших целей. Стремимся к стабильности и уверенности в будущем каждого клиента, учитывая их уникальные потребности и ожидания.</p>
        
        <aside className="w-[70%] m-[50px_auto] grid grid-cols-3 grid-rows-2 gap-[20px] ph:w-[100%] ph:grid-cols-1 ph:grid-rows-6">
          <InfoCard title={"Предприимчивость и приключения"} desc={"Мы амбициозны и всегда стремимся к новым горизонтам и разумному риску, терпимость к переменам лежит в основе нашего инновационного духа."}/>
          <InfoCard title={"Личностный рост и командный дух"} desc={"Мы создаем среду для непрерывного обучения для раскрытия потенциала и самореализации каждого члена нашей команды, ведь только вместе мы сможем реализовать наши общие устремления."}/>
          <InfoCard title={"Приносим пользу, сохраняя скромность"} desc={"Мы верим, что наша деятельность в будущем привнесет позитивное влияние и будет служить на благо общества. Стремимся делать это скромно, без ложной гордыни, сохраняя уважение к окружающим."}/>
          <InfoCard title={"Прозрачность и честность "} desc={"Мы строим атмосферу прозрачности и честности, приветствуя обратную связь и конструктивную дискуссию между коллегами."}/>
          <InfoCard title={"Прозрачность и честность "} desc={"Мы строим атмосферу прозрачности и честности, приветствуя обратную связь и конструктивную дискуссию между коллегами."}/>
          <InfoCard title={"Рациональность и творчество"} desc={"Мы опираемся на логику, факты и рациональный анализ при принятии решений. Поощряем творческий подход, нестандартное мышление и инновационные идеи, ведь только сочетая разум и креативность, можно создавать поистине выдающиеся решения."}/>
        </aside>

      </section>

      {/* section 6 */}
      <section className=" flex flex-col gap-[10px] items-center mt-[20px] relative bg-[url('/src/assets/images/bg-1.svg')]  ph:p-[10px]">

        <img src={blueCircle1} alt="." className=" absolute left-[-300px] top-[-100px] ph:hidden" />
        <img src={pinkCircle} alt="." className=" absolute left-[-700px] bottom-[-300px] ph:hidden" />


        <p className="text-[35px] tracking-[1px] font-bold ph:text-center" >Что говорят наши клиенты </p>
        <p className="w-[33%] text-center ph:w-[100%]">Наш успех определяется тем, насколько наши клиенты удовлетворены обслуживанием. В этих отзывах говорится, что нам есть чем заняться.</p>

        <aside className="flex justify-between items-center m-[20px_0] w-[70%] ph:flex-col-reverse ph:gap-10 ph:w-[100%]">
          <aside className="w-[50%] flex flex-col gap-3 ph:w-[100%]">
            <img src={ok} alt="picture" className="w-[100px]" />
            <p className="textColor text-[20px] font-bold">Послание от Founder</p>
            <p>Наши услуги в Noor ориентированы на создание долгосрочных финансовых стратегий, которые позволят клиентам реализовать свои мечты и обеспечить желаемый уровень жизни как сегодня, так и в будущем.</p>
            <div className="flex gap-2 items-center">
              <p className="font-bold">Юсуф Сафоев</p>
              <p>CEO</p>
            </div>
          </aside>
          <img src={theMan} alt="picture" className="w-[40%] ph:w-[100%]" />
        </aside>

        <aside className="flex justify-between items-center m-[20px_0] w-[70%] ph:flex-col ph:gap-10 ph:w-[100%]">
          <img src={theBoy} alt="picture" className="w-[40%] ph:w-[100%]" />
          <aside className="w-[50%] flex flex-col gap-3 ph:w-[100%]">
            <img src={ok} alt="picture" className="w-[100px]" />
            <p className="textColor text-[20px] font-bold">Послание от Co - Founder</p>
            <p>Мы верим, что ключом к созданию уникального продукта являются талантливые люди, работающие вместе в атмосфере честности и стремящиеся к достижению целей.</p>
            <div className="flex gap-2 items-center">
              <p className="font-bold">Салохиддин Солиев</p>
              <p>CPO</p>
            </div>
          </aside>
        </aside>

      </section>

      {/* section 7 */}
      <section className=" flex flex-col gap-[10px] items-center mt-[20px] ph:p-[10px]">
        <p className="text-[35px] tracking-[1px] font-bold" id="four">Наша команда</p>
        <p className="w-[33%] text-center ph:w-[100%]">People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team</p>
        <aside className="w-[70%] m-[30px_auto] grid grid-cols-4 gap-[20px] ph:grid-cols-1 ph:w-[100%]">
          <PersonCard img={p1} title={"Salohiddin Soliev"} desc={"Co-founder & CPO"}/>
          <PersonCard img={p2} title={"Carrey Johnson"} desc={"Senior Developer"}/>
          <PersonCard img={p3} title={"Ray Marie"} desc={"Developer"}/>
          <PersonCard img={p4} title={"Austin Min"} desc={"Designer"}/>
        </aside>
      </section>

      {/* section 8 */}
      <section className="flex flex-col gap-[100px] items-center mt-[100px] relative p-[0_0_0px_0] ph:p-[10px]">

        <img src={blueRectangle} alt="." className=" absolute left-[160px] top-[-70px] ph:hidden hidden" />
        
        <p className="text-[40px] font-bold text-center" id="five">Предварительная заявка</p>
        
        <aside className="flex gap-[50px] items-center  justify-end w-[100%] p-[0_250px_0_0] ph:flex-col ph:p-[10px] relative py-[100px] maps">
          <form className="blurs p-[10px] rounded-xl flex flex-col gap-3 w-[35%] z-10  ph:w-[100%]">
            <input type="text" className="rounded-xl p-[5px_10px] w-[100%] h-[5svh]" placeholder="Name" />
            <input type="text" className="rounded-xl p-[5px_10px] w-[100%] h-[5svh]" placeholder="Phone Number" />
            <textarea className="w-[100%] p-[10px] h-[100px] rounded-xl"></textarea>
            <button className=" p-[10px_10px] rounded-xl bg-gradient-to-r text-white from-[#C381DB] to-[#4E92F9]">Отправить</button>
          </form>
          <div className=" flex flex-col gap-5 w-[30%] z-10 ph:w-[100%]">
            <div className="flex gap-3 items-start">
              <img src={phoneIcon} alt="picture" />
              <div className="flex flex-col gap-1 items-start text-[20px] ph:w-[100%]">
                <p className="font-[600]">Phone</p>
                <p className="text-gray-500">+880124332334</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img src={emailIcon} alt="picture" />
              <div className="flex flex-col gap-1 items-start text-[20px] ph:w-[100%]">
                <p className="font-[600]">Email</p>
                <p className="text-gray-500">something@email.com</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img src={locationIcon} alt="picture" />
              <div className="flex flex-col gap-1 items-start text-[20px] w-[50%] ph:w-[100%]">
                <p className="font-[600]">Location</p>
                <p className="text-gray-500">43/A Spooner Street, St laurence, Virginia, Texas</p>
              </div>
            </div>

          </div>
          {/* <img src={background} alt="picture" className="absolute right-0 bottom-0 w-[58%] z-0 ph:hidden" /> */}
        </aside>

        <img src={pinkCircle} alt="." className=" absolute right-[0px] top-[-350px] z-10" />
        
      </section>

      {/* footer  */}
      <footer className="p-[50px_200px_50px_200px] flex flex-col gap-[20px] bg-[#FFFFFF4D] ph:p-[10px]">
        <div className="flex justify-between items-start w-[100%] ph:flex-wrap">
          <div className="flex gap-[100px] ph:flex-wrap ph:gap-[50px]">
            <ul className="text-[20px] text-gray-400">
              <li className="font-[600] mb-[20px] text-gray-600">О нас</li>
              <li>Prices</li>
              <li>About</li>
              <li>Services</li>
              <li>Career</li>
            </ul>
            <ul className="text-[20px] text-gray-400">
              <li className="font-[600] mb-[20px] text-gray-600">Resources</li>
              <li>Terms</li>
              <li>Help</li>
              <li>Privacy</li>
            </ul>
            <ul className="text-[20px] text-gray-400">
              <li className="font-[600] mb-[20px] text-gray-600">Team</li>
              <li>Developer</li>
              <li>Designer</li>
            </ul>
            <ul className="text-[20px] text-gray-400">
              <li className="font-[600] mb-[20px] text-gray-600">Blog</li>
              <li>CEO</li>
              <li>Lifestyle</li>
              <li>Article</li>
              <li>Tech</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <p className="font-[600] text-[20px] text-gray-600">Follow Us</p>
            <div className="flex gap-2 items-center">
              <img src={facebook} alt="picture" />
              <img src={tweeter} alt="picture" />
              <img src={In} alt="picture" />
              <img src={youtube} alt="picture" />
            </div>
            <p className="font-[600] text-[20px] text-gray-600">Subscribe to our newsletter</p>
            <div className="flex justify-between border-white bg-transparent rounded-[25px] border-[2px] p-[5px] gap-2">
              <img src={grayEmail} alt="picture" className="w-[20px]" />
              <input type="text" className="border-none outline-none text-[20px] bg-transparent" placeholder="Email" />
              <img src={right} alt="picture" />
            </div>
          </div>
        </div>
        <hr className="border-[1px]" />
        <div className="flex items-center justify-between text-[15px] tracking-[1px]">
          <p className="text-gray-400">All rights Reserved<span className="font-[600] text-gray-500"> Noor moliya, 2024</span></p>
          <p className="text-gray-400">Сделано с ❤️ <span className="font-[600] text-gray-600">Noor tech</span></p>
        </div>
      </footer>

    </main>
  )

}

export default App
