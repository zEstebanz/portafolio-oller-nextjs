// pages/games/game.js
import React from 'react';

function Proyecto() {

    const projects = [
        {
            title: 'Pixel Arcade',
            descripcion: 'Este proyecto utiliza tecnologías como React, Next.js y Tailwind CSS para... Herramientas utilizadas: React, Next.js, Tailwind CSS',
            imagen: '',
            urlManual: 'https://docs.google.com/document/d/1_Jb_JI4Jj-_6FTXbl5p5uq3rnNJLXApw7Fv-oP0p0Qc/edit?usp=sharing',
            urlDoc: 'https://docs.google.com/document/d/1PMzYSpLcjtN7fy9kQ1bZwXiEuCQWZYszcN49b00NCMk/edit?usp=sharing',
            urlGit: 'https://github.com/zEstebanz/pixel-arcade-mongodb.git'
        },
        {
            title: 'MendoPleg',
            descripcion: 'Este proyecto fue creado para una industria muy importante de Mendoza dedicada a la metalúrgica. Esta página web muestra los servicios de la empresa, sus últimos trabajos y una sección de contacto para que el usuario pueda comunicarse con la empresa.<br>Las tecnologías implementadas que se utilizaron en este proyecto son: HTML, JavaScript, Bootstrap.',
            imagen: 'https://lh3.googleusercontent.com/pw/ABLVV85uE_DoyVZt702N97tBAcZT28UkkB6ZCf7MJ09vbbcJYyl3G3qYSaWDGdJFrttL6_cAt2Gpf8p54QpQ20G0loQQideYqG9oG0G3hlIfL0p0BHzBOOPHKG8rcmHkY0zXdIUBKxag7-07YlnF_3nPgwBGE3SRvM3IYX4uukr0Cge0VYbp0fqfGz8jiLYQ9Wu1dinVwEeUwjPwj5A80pYWQCaoF9HMVGTwZX7xdq58IPiWSO31hcnFk5GEVFslrDoN6BSPig5ajyb3lNKKwRpaqxv9C_-RZ2py89es3NsLyedSj3vgpdfZ9PmGAWDtSmobQjK1w6JPI7TtCahXoeEtwUMrVi4fxw_RsEGwJh_JLtMJ5GTF4nKx6V0lf2AfLmmGt_S4Ui1q83UPErU_NksI_uwd1W7tqdX-nz0rJWjIcmUab2tUAKIMMDLdNGPOKi4eIu_RBoySgJP3hBuwTMi0nguUy4tRVTDbXZ_GNtmpvn_IUJwrrElGEW1y-DiyeuJpRY-uypjKLiRmYR7ac7Atkc9hD6YN5AxN-NsYKGP_FY1QTCXFyBx-utLxvabEHJknG7IaL1VTqaYmuOVFqFgN7LT1SmTvTKfaikkYfXVP9XRzjXzTT8_G9aduYjHISSuus7RKnxjtksDdvV8xBpK4z21hYaaJkSJ4A9g6qDRbI4v_h4t2Ii61WugNbMbDPkH9zacORldnFeeHd7qFhbmg83uVRYVZNilvDyC51lcXPOIAjApjtkzeT8RMbAnecV8i6yJ2Ym5Ai3xtiHZpTM0d47XByoaRB1vIoKYyR9etKkLg8AfphyAtYdZQw69GW5gwqffNpVs1LhUXZ6E96kG-0DepZX4q1vGTYo2MLyjw6NJ0UygnpiPSmKELqBgGlYHDkIjfdriUQV_YvaLOSEiKdRvRjVCXVASLjTpXD7g=w960-h600-s-no-gm?authuser=0',
            urlHost: 'https://mendopleg.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
        {
            title: 'FoodGo',
            descripcion: 'Este proyecto utiliza tecnologías como React, Next.js y Tailwind CSS para... Herramientas utilizadas: React, Next.js, Tailwind CSS',
            imagen: 'https://i.ibb.co/YQNzZN4/foodgo.jpg',
            urlHost: 'https://optimistic-fermat-9e3b0b.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
        {
            title: 'Rick & Morty API',
            imagen:'https://lh3.googleusercontent.com/pw/ABLVV84p9KDzs4LL7lwIbG2Vvjxirv6oR-6wZE0qg84DSmcyhic4D-IQjCpuRALGZDzqCDVARR4ITpA-mFzmDr8785nShYOiwbFVpYt5vyJB1f5WhZlfIuyi4wudIKEn_xe31g9q3an3gf4ZaZds0tKSbu-ZFzPoIXgK3iKu4lLeeqIbbyXZXeMrlgRwp3_ydYl-ODCIYaJ8tqtE-zA6VAQ3TUThx_F8hRkSKkczSFF2IwF5mYo9iYvz5NsNuLoUR4WF7gECn2km4AmmepDrWjjyvo3H3weUBXZCUhugFWOb7K-1pw1-xxkTjn-5UdTYEtXYv_RFbnBr0HPPdfDFxAblW5-FZm3Xpvdb89Y9J7qNBkSZfRvj_-79nScpIw4AzfAx1f-0-V5wwZsRMTdM0DYf69ip8WqgFaIE-Bcg2gshzMnz1ULK_HKUJw7J9eTlJDIiEesRqmpKZhVSHGsYzDpoqaNW7dcOL6yCqEhXYVDOigLQ9otReN0RaGGMVitRAIRb6MM3boenWsRuPy7kDI4g_xbDq8eWLK3hmVSHOmT37XfboyHNxfM1cIKUUjP3Glbguw4X40MVMZzjMY-SE7DTJHRz466AxKUn0qSV-RhN8SjzZKDp8VdfjreuHbLKAQ6rBvhte-WouqIvTyb5iCrUTkWWugvGHmNyLfR1k_6d9xKISzBkaMhidK-w5j7pn9M7C3lN2GOuj2xAcWlMNEZnERsqPE6xwFhQIX0JsA3oXobyX3MigRPm80OQEb1yEtRnCeYTsOK_9KJnjLj7je3G044MxSMMwSZYrIzBfZsWaJBeE4iCSfA0o_xq_XhcPfGpWeMGe0akQlZGzP-qXKg7F5sb18j9_edN3vfo8P2TWV4VGPXwqQNKyrOkckxvZucZYDQ6WYPC-RVAxeN6dGkCE3FLQrVUbC8kUlJmRkuM=w960-h600-s-no-gm?authuser=0',
            descripcion:'',
            urlHost: 'https://marvelous-lebkuchen-8fe5f7.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
        {
            title: 'Rutinas Gym',
            imagen:'https://lh3.googleusercontent.com/pw/ABLVV85ttmrCjJxmrkETW8hUtWVxa4quTJVwMsMP64kew8JInKk7zpmRrniIu8xiT633qyrXjCC2DAY7FDXDygaqlfmmtdnv9PzJytCGlSEhG4UYyq6DGLx1PiUVhri9Dwy02lqD8FYX6xOG3SLlU6UQpSzYVoD_kytxdkweZhVD6bkQDilhL6EBOHtIfjjZqdUa9xO5IStLzoW3CpEp3yEpl-JfLO5aIY713Vn1Zc_HksAmRFEi-U8k5N7mXTOb_19NjeAZWBhj_Im__TDM8m1CfrWsQR2GaFcXhiqj9MemRINo4X0TB5YECcN82TmK1b_O_-EsY7DMfH7KyLM_BgX7pZNRYjRmsHCln1rSdWqsvuN-dv3U6IVV08ZUVU_Pn1surLX9WpG4pXY5TnQvvZVutJX-K5XO-8eq-6fTae-fkjecaHXRWKknOcQryvVu3DWPz57ZdIZf1P8A9j2UwnclGosLfzbt5HcsqAqQdLQInSoEV_pTCckuCWOrLZwD2Jg9-zTebFb6JpVx0ac1K1VY17GmeuqTjBqZOJO7XunoA7waGrle_t2257l1cKakymMSCmeTffaCpCj1PkhHJ5qSt0wArl99Pxh4zmgBem98HqWjvl46uhJ8-x1jPWcWJ-JGnFVTfCnJdJwLKTgIFcoCN5ee3FR2D9eNQIXu5CJIel8kVGROgUqfNH35AvBXDYK1mi7g-MNHEpD4IJNxaKYYr7aWN1kZ-uJJeziTfKDYJrysFPwv3ptfBI57vSfbefpFUEplQ9ciICZ5Pkbr8oMUv21gNrs4qLGX-dT2xCyhISHtQo-iOTl2f_c3Urvz7DGWwGKNHDBK2Wd90d5JzDS2MR4B0SPf2bnEA5_S-g8wNZ-RE79wbW3iHP9WRJ3GYH9QgiTCgw0CWwDAlYk-SlRMue7Z2dWEGfpZO_TXHkAZ=w960-h600-s-no-gm?authuser=0',
            descripcion:'',
            urlHost: 'https://training-gym-system.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
        {
            title: 'Blog',
            imagen:'https://lh3.googleusercontent.com/pw/ABLVV85GqzSUEYfeuVskvwX8hbqxUtUiHkPYVa-zHPuEU-3I5gDKInKfrAP36end87qWWXP8NN8jSLMa1cNS_SS5Uohj3soBOJEQytik2E4p5aH_Zf7WVS2hkfROr4dRwrBHxXuFtLeTZFUfdBLECzdSP95CyP7OB-XmxzSx0Y9g_ai1lojhnYgixnN53yTnPAIf7z8qovimlMWkqB17pzyu-NscM_g2FtjZWg7uEfVcI6A0O0BeOwoV2hDjjD-oEMi-_HSImtBzQwc4e7hvfbQsNrm0VWbvkOQMT3zXTc7JcXDUy9XKF7Pu6fk8ferhgWdU63snNBpfyoOwTKMD8fhnxJPb9JRYrbSc4rjuFpXRiCIiwGuZKpJpbGi_G95QDyDB6CFB3HATS0EwCiMrOhDd4q-6LBzXsrlDNkk_hN-Ej5ftecMPlfq7ivwAjqWU6P5ceZuH5nebQOMRBx5wjnviVn5Pk6CLWNkrWiUgRs5WRCExMeLvgHdK6XUblqJHJ0RWpX0tbGvDx3UUbJGBnmdV9GX69eR6j7Y7oCuZUr5aBvhY7YrxlDNrNnZwKBDMKyHJJiO4hJMf-e0G1VXHXxNZ9JItgqmByUPnLzdGWa4odIGR7xVSZcvIhXNQji1Oc3ZA09547lFgXh-md0IBEAkwwDOGXCI3heocR_LZ8hLln47DI85kdH_jRrYX2y9EZx3SEzlVAxImgGVgD3sACZS6v2HTY0ivIot5atPnL5RoAMqmX-gePHonJpaPkUCEoBijU70fMZDDzgZTrvq2YKv6tDmHpSamNYBiTX2vt2iaELULTnvEvZJ3lkQs-xGbfB3J_RruoxTnnfzlmPwnzczyOhcntWfae3I21i158WPPyFRL7xRaTV_m6civN5CLS6oDWgtCj-_PJcpybIg2cy-WXDCcnP0M3NujbZk_yigN=w960-h600-s-no-gm?authuser=0',
            descripcion:'',
            urlHost: 'https://documentacionpp2.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
        {
            title: 'Blog de Café',
            descripcion:'',
            imagen:'https://lh3.googleusercontent.com/pw/ABLVV85SU6fI7zpJjAeGiwPNc32cpS26di6Ij6QNntlP31Zbm9FiaobujfWg5krJH_Uu3P4Msd5XziMZvrSs_4oz0AYJA6mesbxZ4Df-ocySjqSCXQEGuuKs1K0AK1pVr2yI6QUwFyV2TbIzR-XWqXhxVj_Hs1T1jldo4v9aoL-GpfaJnvEe4o3db2Ei9bLoeIsn-3PSUAFlZPy1d7CjYt8gEDbfMlMXzpd5vpfpZn2KlTu0iNZMGippUs_YApx1Lf6ScLlxMSDWshDeg4t_H345wUo4bY0HxS279Dhl92qJsw1dIlaVxg-Y0a8nDlRGXvDG8vB-uLivmtIylbEVKBLQ0opMQd5l1PlxEEnpiiiKL6S0aSbwhobDrLTYUxBHpRQJOHVSYYWN5qdNIu55h-o2te3S_cG1ASk4FlrVzTe75dnTf0Y5aQFdUI3QJ6f3g7RaqB487ncxycwFV7lSRaKvq5iidNDf5HkQrq66fsoprXeTuwpcv5-DwRcQ2b14AsVai-ftyxvXxUxLCzp9KFWt91mnT_B4wJSgFngmrGIzJIwtzGjoaklrYe_yIq9hPQ1fvxWbnz-9lFN1wnbg8RvJqqhNH4Rq8gr0kmHJVaKzWsKTcSbY14HCbcjhgQEmJBIl3Jnf56SDFCdfhziSghFFd1bK8NA8zFRbPHcavg9hc05UHp-G3RqKUkOuTXefyGxvVRaslSp9FprTCLup4T_mFfQQDG4j_UFWW8v2xCump99nc2zZHipNOAdR4SN1D9-OL5lMZI9ygr8l0zhX5jF4VZ3JH2Jxn_PMDFyLlrd01yLR5hN2SbRa5Ie3A872_NvIi4G49gHVbVrgS2igWQNx-LqaKu3os5nPunS9WCwZVGE9tbUuWqSfPpxuxN-1Gqx4W4GUHgxktYeTCgfz3_uWh4-1htJWLjpWRN8vt_jU=w960-h600-s-no-gm?authuser=0',
            urlHost: 'https://optimistic-fermat-9e3b0b.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
        {
            title: 'Frontend Store',
            descripcion:'',
            imagen:'https://lh3.googleusercontent.com/pw/ABLVV84MNLxipiE7_zegeOQdY_o05KEBg11JBqiPLtF56Xe-xnBUm52h1Z4Ch1lTbJu1SLm_fajM_BLRXMVSm_bTZcFzc5YumSitLxMzV_e-uYLDMtgQdpW-Imw6maY42sT0OMDl_8yQZ-xbwTiGD4gTtAjadJlX1id7CtcaO6vlrUL8OUS5nu-nE3MuCwzA6xOyUg0OxLGY78kqd8yruHQrTLjgFhfvI6OdepSsRi-eSCqkPS3_s80OICYGLiD575FGOThWnBuhjUtupOstF7SwdMRg8CXvB_zimTGDxQcsaEyNpnw__U_d6KFHKr9Dja1q-ho7BW8zz2MdprkJQgIB88nsAXCeungr40rEHHCChLvp5jKNRqMK54uSu8_spbI0t2E9j2YzZYaemxafbs3CGVU0zaDGYMpy5jAv2bOEwr18VgWo7yijyun4uZzDmmQexuimNuTZxlLhAY2y4fiRjsodPliff5NGvSOsYA3YpgxWpvDSSqk4x1eUal7A2JMKIYB8FP7pTz1l0asTLuUIQvYdlQ0WuhmYW2hmLJuRNSy8PllfUb0SlcCOxGA66Kk9LIZU7hwt3URhYmGR3r9WPQoG3eSwqMuvzOSdx4rDitmrcl8e9-Nb5D9PTyibx0Rpi9-QvrzHp52-thpSymVKczP0iSowa_xTKL-U3PEmORpW1B1mgW-BSQQgMuKpX1dpPb7XrJX5TGtWsts73LG0n9-AKwV6LQrDW33koFTXhf72aM9X8Oo0yC_HSBahCSjl8PMCPGVH7_UL5ci_-oEFxG5BIL8SGgd4kBy4S5_Yi1VyMT91jE9QNoiIJKy5LzqvMCJq1ceSDzwXK2uJND_WMmqdHYNz384d7d5PNLyXPsyu8TtJy_Iw-PSJnYvnXvYteAawvUlYeBERLityHPs90rzr2-5TKRJYZwysdKBM=w960-h600-s-no-gm?authuser=0',
            urlHost: 'https://frontend-store-70f6cc.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
        {
            title: 'Pirateria Informática',
            imagen:'https://lh3.googleusercontent.com/pw/ABLVV84HGq70yYD1YvL2GvCOs8fi1GLQq6LGhXBzzHV-IOACuyHQWiabB0fTgqwu3SU4Kb4VdYGiuWtnTmoA8cZpF7_n0Tgk8n7gP05gBVAdM-AzA3bBftS5QAJcETN9A5Btxmc_Wtsm0-x521gTiDIEJijnfz3Um5EJ2B6oH8M5ymIVKSwZ8FGpxFZixM5gZvz4ySvsLECgm23liNBqBjoeEHVnvu8kqrTfPXHYWxohYUQe46U0IAYtyHQiAvTOA1iLNzcAjMjSwj1WQz-zEgZcyb63QafV5PwCCrwbcatvt_HELF5N52Ga3V_8HavjbYy0MmmQlR8v3mDTInsueLPhWl6R9agRaPXhTuES-yZHVmFnJhpLiwI05rZZD9cIgtWOoWR0lkTLhWg3-fEh2lZ2c4GzmNvPAIA-vb7hRgE17Jk3sILMgMZFvewblPItryUk0zsGtY2Ba2zGczyktXp5tGjJ9tqc3MB5np2RIa81AI-PkVtGAEw7Fo6sMZMfOBSVob2we_vRjcUOMQDjn5aDpylT7XChpE81BLV6idAlgLAfLUOyQHvlZ0iXWlPHCZOgK2osIE6EQO_ONwY7YoHbXTLjONI1_4JgnQxVqNcFC_7xWU3DDpD4CBQq-DyyrIdUj0FjReyWK_sdUIWqUXQpNkLSMksuG7DIuIG9HThVSGJPtZteCBx2Zai5U8OEx6ZQDwgAzcvhl2cDk1U752eYBTmi7RzDh-VypxT1kFw8CLPEtJYDNxaoRa2pF4D9CryE92jB1wyrv7PUgSPV-l-roSzruJLtH3BscyBnDdbCrdPlI7ey_Fz0GRGs87uYDwE5W1pZJ7AjNktW6gcDUtlL1uYdrmzoJOB2PmkD9Bz082J8yUH7pwVhkv-vUfAhP8wRWk-WA7qZ_EMxwVLdx_LQ64qJs9tBhicYZunczLp7=w960-h600-s-no-gm?authuser=0',
            descripcion:'',
            urlHost: 'https://cool-praline-b8d12c.netlify.app/',
            urlGit:'',
            urlManual:'',
            urlDoc:''
        },
    ];

    return (
        <main className='section-port h-screen'>
            <div className='port'>
                <h1 className="title text-white">Projects</h1>
                <p className="sub-title">Mis proyectos mas importantes</p>
            </div>
            <div className='p-8'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
                        {projects.map((project, index) => (
                            <div key={index} className="boxCustom h-100 text-white p-4 rounded-lg shadow-lg">
                                <a
                                    href={`/project?imagen=${encodeURIComponent(project.imagen)}&title=${encodeURIComponent(project.title)}&descripcion=${encodeURIComponent(project.descripcion)}&urlManual=${encodeURIComponent(project.urlManual)}&urlDoc=${encodeURIComponent(project.urlDoc)}&urlGit=${encodeURIComponent(project.urlGit)}&urlHost=${encodeURIComponent(project.urlHost)}`}
                                >
                                    <h3 className="text-2xl font-bold text-center title-text">{project.title}</h3>
                                    <img
                                        src={project.imagen}
                                        className="block h-60 object-cover rounded-lg"
                                        alt={project.title}
                                    />
                                </a>
                                <div className="card-body mt-3 text-center">
                                    {/* <p className="text-gray-300">#</p> */}
                                    <a
                                        href={`/project?imagen=${encodeURIComponent(project.imagen)}&title=${encodeURIComponent(project.title)}&descripcion=${encodeURIComponent(project.descripcion)}&urlManual=${encodeURIComponent(project.urlManual)}&urlDoc=${encodeURIComponent(project.urlDoc)}&urlHost=${encodeURIComponent(project.urlHost)}`}
                                        className="buttonCustom text-white mt-2 py-1 px-4 rounded-full inline-block"
                                    >
                                        Examinar
                                    </a>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Proyecto;