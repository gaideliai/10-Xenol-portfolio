"use strict";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//header

//hero
const heroes = ['Jackie Chan', 'Chuck Norris', 'Bruce Lee', 'SpongeBob SquarePants'];

//about us
const skills = [
    {
        title: 'Design',
        value: 80
    },
    {
        title: 'HTML5',
        value: 85
    },
    {
        title: 'CSS3',
        value: 95
    }
];
//portfolio
const works = [
    {
        photo: 'portfolio1.jpg',
        title: 'Bananas',
        link: '#',
        tags: ['maistas'],
        size: 1
    },
    {
        photo: 'portfolio2.jpg',
        title: 'Gėlė, kava ir klaviatūra',
        link: '#',
        tags: ['augalai', 'maistas', 'technika'],
        size: 2
    },
    {
        photo: 'portfolio3.jpg',
        title: 'Kava',
        link: '#',
        tags: ['maistas'],
        size: 1
    },
    {
        photo: 'portfolio4.jpg',
        title: 'Ledai rankoje',
        link: '#',
        tags: ['maistas'],
        size: 2
    },
    {
        photo: 'portfolio5.jpg',
        title: 'Kremas',
        link: '#',
        tags: ['kremas'],
        size: 1
    },
    {
        photo: 'portfolio6.jpg',
        title: 'Kaktusas',
        link: '#',
        tags: ['augalai'],
        size: 1
    },
    {
        photo: 'portfolio7.jpg',
        title: 'Fotoaparatas',
        link: '#',
        tags: ['technika'],
        size: 1
    }
]

//services
const services = [
    {
        icon: 'language',
        title: 'Interface Design',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'optin-monster',
        title: 'Experience Design',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'connectdevelop',
        title: 'Web Development',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'first-order',
        title: 'Mobile App',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'slideshare',
        title: 'Digital Marketing',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'themeisle',
        title: 'Woocommerce',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    }
];

//team
const team = [ 
    {
        name: 'Adam Smith',
        position: 'partner',
        photo: { src: 'team1.jpg', alt: 'Adam Smith image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Annie Taylor',
        position: 'developer',
        photo: { src: 'team2.jpg', alt: 'Annie Taylor image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'James Morgan',
        position: 'manager',
        photo: { src: 'team3.jpg', alt: 'James Morgan image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Taylor Swift',
        position: 'designer',
        photo: { src: 'team4.jpg', alt: 'Taylor Swift image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Adam Smith',
        position: 'partner',
        photo: { src: 'team1.jpg', alt: 'Adam Smith image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Annie Taylor',
        position: 'developer',
        photo: { src: 'team2.jpg', alt: 'Annie Taylor image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'James Morgan',
        position: 'manager',
        photo: { src: 'team3.jpg', alt: 'James Morgan image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Taylor Swift',
        position: 'designer',
        photo: { src: 'team4.jpg', alt: 'Taylor Swift image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    }
]

//numbers
const numbers = [
    {
        icon: 'archive',
        number: 130,
        title: 'Projects done'
    },
    {
        icon: 'hand-lizard-o',
        number: 80,
        title: 'Happy clients'
    },
    {
        icon: 'users',
        number: 700,
        title: 'Employees'
    },
    {
        icon: 'trophy',
        number: 90,
        title: 'Award winner'
    }
];

//pricing

//blog
const blog = [
    {
        date: {
            day: 23,
            month: 6,
            year: 2019
        },
        photo: {
            src: 'related-post-1.jpg',
            alt: 'Photo 1'
        },
        title: 'Business Strategy Consule',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 7,
            year: 2020
        },
        photo: {
            src: 'related-post-2.jpg',
            alt: 'Photo 2'
        },
        title: 'Packaging design for Avanaa',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 8,
            year: 2020
        },
        photo: {
            src: 'related-post-3.jpg',
            alt: 'Photo 3'
        },
        title: 'Using laptop beside aloe vera',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 6,
            year: 2019
        },
        photo: {
            src: 'related-post-1.jpg',
            alt: 'Photo 1'
        },
        title: 'Business Strategy Consule',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 7,
            year: 2019
        },
        photo: {
            src: 'related-post-2.jpg',
            alt: 'Photo 2'
        },
        title: 'Packaging design for Avanaa',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 8,
            year: 2020
        },
        photo: {
            src: 'related-post-3.jpg',
            alt: 'Photo 3'
        },
        title: 'Using laptop beside aloe vera',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 6,
            year: 2018
        },
        photo: {
            src: 'related-post-1.jpg',
            alt: 'Photo 1'
        },
        title: 'Business Strategy Consule',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 7,
            year: 2019
        },
        photo: {
            src: 'related-post-2.jpg',
            alt: 'Photo 2'
        },
        title: 'Packaging design for Avanaa',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },      
    {
        date: {
            day: 23,
            month: 8,
            year: 2020
        },
        photo: {
            src: 'related-post-3.jpg',
            alt: 'Photo 3'
        },
        title: 'Using laptop beside aloe vera',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    }
];

//testimonials

//get in touch

//map

//footer