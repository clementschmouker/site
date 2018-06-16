@extends('master')

@section('content')
    <div class="spaceshuttle">
        <div class="spaceshuttle__ship">
            <div class="spaceshuttle__windows"></div>
        </div>
        <div class="spaceshuttle__ambient-light"></div>
    </div>

    <header class="header">
        <canvas class="header__canvas"></canvas>
        <div class="header__inner">
            <div class="header__logo"></div>
            <h1 class="header__title">
                <span class="header__title__main">Clément Schmouker</span>
                <span class="header__title__sub">Web Developer</span>
                <div class="header__title__decorator"></div>
            </h1>
            <button class="explore-button">Explore more</button>
        </div>

        <div class="header__waves">
            {{-- {!! file_get_contents(asset('img/home/wave-first.svg')) !!}
            {!! file_get_contents(asset('img/home/wave-second.svg')) !!}
            {!! file_get_contents(asset('img/home/wave-third.svg')) !!} --}}
            <svg width="100vw" height="100vh" class="header__waves__svg header__waves__svg--1">
                <path class="header__wave wave--1" d="" fill="#9d9d9d" />
            </svg>
            
            <svg width="100vw" height="100vh" class="header__waves__svg header__waves__svg--2">
                <path class="header__wave wave--2" d="" fill="#202020" />
            </svg>
            <svg width="100vw" height="100vh" class="header__waves__svg header__waves__svg--3">
               <path class="header__wave wave--3" d="" fill=#000 />
            </svg>
        </div>
    </header>



    <section class="home__section section__first home__section--dark | ctn">
        <div class="home__section__inner | ctn__inner">
            <div class="section__left">
                <h2 class="home__section__title">Wanna see my work&nbsp;?</h2>
                <p class="home__section__text | col-9">If you aren't here by mistake, I bet this is why you came. If not, well, enjoy the ride.</p>
            </div>
        </div>
    </section>

@endsection