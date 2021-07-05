const products = [
    // guitarras
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b1',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'guitarras',
        tipo: 'guitarra cuerpo sólido',
        marca: 'Fender',
        precio: 450000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b2',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'guitarras',
        tipo: 'guitarra acústica',
        marca: 'Gibson',
        precio: 380000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b3',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'guitarras',
        tipo: 'guitarra eléctrica',
        marca: 'Ibanez',
        precio: 250000,
    },
    // bajos
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b4',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'bajos',
        tipo: 'bajo cuatro cuerdas',
        marca: 'Cort Jeff Berlin',
        precio: 375000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b0',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'bajos',
        tipo: 'bajo cinco cuerdas',
        marca: 'Fender',
        precio: 420000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b5',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'bajos',
        tipo: 'bajo activo',
        marca: 'Yamaha',
        precio: 370000,
    },
    // pianos
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b6',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'pianos',
        tipo: 'piano media cola',
        marca: 'Essex',
        precio: 775000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b7',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'pianos',
        tipo: 'piano cola entera',
        marca: 'Yamaha',
        precio: 1420000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b8',
        categoria: 'instrumentos de cuerdas',
        sub_categoria: 'pianos',
        tipo: 'pianola',
        marca: 'Kawai',
        precio: 670000,
    },
    // baterias acusticas
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d2b9',
        categoria: 'percusión',
        sub_categoria: 'batería acústica',
        tipo: 'batería',
        marca: 'Tama',
        precio: 875000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d210',
        categoria: 'percusión',
        sub_categoria: 'batería acústica',
        tipo: 'batería',
        marca: 'Pearl',
        precio: 995000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d211',
        categoria: 'percusión',
        sub_categoria: 'batería acústica',
        tipo: 'batería',
        marca: 'Mapex',
        precio: 815990,
    },
    // baterias electricas
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d212',
        categoria: 'percusión',
        sub_categoria: 'batería electrónicas',
        tipo: 'batería',
        marca: 'Roland',
        precio: 975000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d213',
        categoria: 'percusión',
        sub_categoria: 'batería electrónicas',
        tipo: 'batería',
        marca: 'Alesis',
        precio: 999990,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d214',
        categoria: 'percusión',
        sub_categoria: 'batería electrónicas',
        tipo: 'batería',
        marca: 'Yamaha',
        precio: 815890,
    },
    // percusion
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d215',
        categoria: 'percusión',
        sub_categoria: 'percusión acústica',
        tipo: 'bongó',
        marca: 'Aladez',
        precio: 665000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d216',
        categoria: 'percusión',
        sub_categoria: 'percusión acústica',
        tipo: 'tumbadoras',
        marca: 'Alegro',
        precio: 470990,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d217',
        categoria: 'percusión',
        sub_categoria: 'percusión acústica',
        tipo: 'timbal',
        marca: 'Baldassare',
        precio: 340890,
    },
    // Amplificadores
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d218',
        categoria: 'amplificadores',
        sub_categoria: 'cabezal',
        tipo: 'cabezal a tubo',
        marca: 'Marshall',
        precio: 715990,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d219',
        categoria: 'amplificadores',
        sub_categoria: 'cabezal',
        tipo: 'cabezal a tubo',
        marca: 'Laney',
        precio: 837990,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d220',
        categoria: 'amplificadores',
        sub_categoria: 'cabezal',
        tipo: 'cabezal a transistores',
        marca: 'Ibanez',
        precio: 690890,
    },
    // cajas
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d221',
        categoria: 'amplificadores',
        sub_categoria: 'cajas',
        tipo: 'cajas',
        marca: 'Marshall',
        precio: 640990,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d222',
        categoria: 'amplificadores',
        sub_categoria: 'cajas',
        tipo: 'cajas',
        marca: 'Laney',
        precio: 770000,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d223',
        categoria: 'amplificadores',
        sub_categoria: 'cajas',
        tipo: 'cajas',
        marca: 'Ibanez',
        precio: 680890,
    },
    // combo
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d224',
        categoria: 'amplificadores',
        sub_categoria: 'combo',
        tipo: 'combo',
        marca: 'Marshall',
        precio: 478990,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d225',
        categoria: 'amplificadores',
        sub_categoria: 'combo',
        tipo: 'combo',
        marca: 'Laney',
        precio: 579990,
    },
    {
        id: '5270379b-0e45-4ab5-a2f8-f45e6159d226',
        categoria: 'amplificadores',
        sub_categoria: 'combo',
        tipo: 'combo',
        marca: 'Ibanez',
        precio: 480890,
    },
];

exports.seed = async knex => {
    return knex('products').insert(products);
};