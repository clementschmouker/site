@extends('master')

@section('content')

    <header class="header">
        <canvas class="header__canvas"></canvas>
        <div class="header__inner">
            <div class="header__logo"></div>
            <h1 class="header__title">Clément Schmouker <span>Web Developer</span></h1>
        </div>

        <div class="header__waves">
            {!! file_get_contents(asset('img/home/wave-first.svg')) !!}
            {!! file_get_contents(asset('img/home/wave-second.svg')) !!}
            {!! file_get_contents(asset('img/home/wave-third.svg')) !!}
        </div>
    </header>



    <section class="home__section home__section--dark | ctn">
        <div class="home__section__inner | ctn__inner">
            <div class="section__left">
                <h2 class="home__section__title">Wanna see my work&nbsp;?</h2>
                <p class="home__section__text | col-9">If you aren't here by mistake, I bet this is why you came. If not, well, enjoy the ride.</p>
            </div>
        </div>
    </section>

@endsection