import { Component } from '@angular/core';
import { TatuajesInterface } from '../../interfaces/tatuajes.interface';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-disenos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './disenos.component.html',
  styleUrl: './disenos.component.css'
})
export class DisenosComponent {

  public tatuajes: TatuajesInterface[]=[
  {    
    nombre: "Jorge",
    rutaImagen: "https://i.pinimg.com/564x/9b/ec/d0/9becd0de102ec1d03512d395cf988e3c.jpg",
    description: "El tatuaje realista retracta la vida tal y como es, la naturaleza, las personas, animales, cosas... el artista del tatuaje tiene que tener la capacidad de poder capturar lo que está en la foto de manera que se vea igual en la piel. Jorge es un especialista en esto, revisa sus diseños y judga tu mismo",
    estilo: "Realismo",
    galeria: ["https://i.pinimg.com/564x/94/8c/3d/948c3d16bdfbda976fb5a559b6c8723d.jpg","https://i.pinimg.com/564x/37/77/d9/3777d919a72859cc943db7e3d070eb4b.jpg","https://i.pinimg.com/564x/9b/b3/2a/9bb32ad284abf3c83ad1a4588a7fef5a.jpg","https://i.pinimg.com/564x/6b/f3/61/6bf3614fd89e9ad025b3eea9d38f8d6c.jpg","https://i.pinimg.com/564x/0d/3b/f7/0d3bf79b12289c1c4ba3b6679bdb617f.jpg","https://i.pinimg.com/564x/15/02/f2/1502f27bcf6badc5816b8b475d02f1b1.jpg","https://i.pinimg.com/564x/5d/c5/bc/5dc5bce2a27156800bc941cb481f6d35.jpg","https://i.pinimg.com/564x/ba/34/da/ba34dada99fe9e0ea33daafdb5bff091.jpg","https://i.pinimg.com/564x/a3/5f/a8/a35fa81f7fa79229b50323f518451dff.jpg","https://i.pinimg.com/564x/29/b7/e2/29b7e23a55cee845459e39aed73464b6.jpg"],
    galeriaDesign: ["https://i.pinimg.com/564x/62/3e/96/623e96098ea50997e55ad9da3a395f6f.jpg","https://i.pinimg.com/564x/f2/9b/78/f29b78f9a82c8ad6fd0c7b732c92aa01.jpg","https://i.pinimg.com/736x/ce/d0/fb/ced0fb0a3df7addf6771e06e856a1a21.jpg","https://i.pinimg.com/564x/32/44/18/324418c9aedd51eb614ce1c5b7507ba9.jpg","https://i.pinimg.com/736x/06/16/54/0616546246a47feca925f63e06e1ca9e.jpg","https://i.pinimg.com/736x/72/46/d0/7246d0477bb69b667e0a0ab864a6afde.jpg","https://i.pinimg.com/736x/c2/63/30/c263302297c0c2752360f34d75e58920.jpg","https://i.pinimg.com/564x/36/6e/f2/366ef254dc838f3fd438656664193a04.jpg","https://i.pinimg.com/564x/44/f1/8a/44f18a632895bad190ac22735bb3601e.jpg","https://i.pinimg.com/564x/83/4f/d4/834fd4902ca12eab67013e4f66d3a439.jpg"],
  },
  {
    nombre: "Wang",
    rutaImagen: "https://i.pinimg.com/564x/d7/1a/2b/d71a2b3849a8970421b39b3456b9f418.jpg",
    description: "La técnica del puntillismo en los tatuajes consiste en la aplicación y agrupación de puntos de tinta con el objetivo de formar una imagen. Al contrario de otras técnicas, el dibujo se logra a partir de puntos y no de líneas. ",
    estilo: "Puntillismo",
    galeria:["https://i.pinimg.com/564x/2c/6e/67/2c6e67bf8117aeeaac3f6ac52a99a691.jpg","https://i.pinimg.com/564x/57/1c/92/571c92ede03d847ff4cd3c7c229f6848.jpg","https://i.pinimg.com/564x/90/f9/30/90f93024f6fabc3f334647a29134cac7.jpg","https://i.pinimg.com/564x/0d/09/f5/0d09f5ab637028823e56e888b41dda5c.jpg","https://i.pinimg.com/564x/7d/d9/b3/7dd9b3aa1e5edf03cb2eaf89e3f4e6ed.jpg","https://i.pinimg.com/564x/30/e8/57/30e857856360708245973ee827cd5f3b.jpg","https://i.pinimg.com/564x/a0/21/6f/a0216f5224b197feb701aae3f0267000.jpg","https://i.pinimg.com/564x/40/aa/5b/40aa5b676c3975539bc3211acd78baa2.jpg","https://i.pinimg.com/564x/e8/1f/35/e81f3521c3f7ceb9cd77be77ddd34b18.jpg","https://i.pinimg.com/564x/48/ce/79/48ce795b95d8a940a2670038db7fad56.jpg",""],
    galeriaDesign:["https://i.pinimg.com/564x/34/b3/ef/34b3ef8fb7e8c53d3cf6a9ec796b6532.jpg","https://i.pinimg.com/564x/ff/17/22/ff17220d410e6e3c7c64e1e653eeac2e.jpg","https://i.pinimg.com/564x/82/33/91/8233913641389019488fea9b0edf3c36.jpg","https://i.pinimg.com/564x/0e/0a/2c/0e0a2ce07c9e0a852984d441cad7bd99.jpg","https://i.pinimg.com/564x/95/68/b9/9568b94133c3da9dc19ec2fc0df78696.jpg","https://i.pinimg.com/564x/f1/6c/bb/f16cbbf4b3e04b6e8bc6ba85df2c87d9.jpg","https://i.pinimg.com/564x/f4/74/74/f474740bbe6ee32858433e7bac50b7e2.jpg","https://i.pinimg.com/564x/4e/6d/5e/4e6d5ec6ae31d4de8f4357cc1cacb208.jpg","https://i.pinimg.com/564x/b5/eb/08/b5eb089b6230a1457100339b080c9691.jpg","https://i.pinimg.com/564x/39/ea/a4/39eaa42ac55245820c384e553f99a556.jpg"],
  },
  {
    nombre: "Isabel",
    rutaImagen: "https://i.pinimg.com/564x/6b/9f/f2/6b9ff2a9dd105dd35428e2b0e0fe02f0.jpg",
    description: "Se llama 'Kaioken Tattoo' y cuentan con diseños de series como Naruto, Hunter x Hunter, My Hero Academia,etc.. SI te gusta el color y las lineas perfectas sin duda alguna esta es la artista que necesitas",
    estilo: "Anime",
    galeria:["https://i.pinimg.com/564x/ec/3d/c7/ec3dc7774dee472417830cda476ab8d7.jpg","https://i.pinimg.com/564x/2e/06/b2/2e06b221387e1a5ec6b1b0ed871d6a78.jpg","https://i.pinimg.com/564x/69/e6/23/69e62386b85e8dd694f832950129285d.jpg","https://i.pinimg.com/564x/47/ad/1d/47ad1d2d410588bb1b00da7fedbe11cb.jpg","https://i.pinimg.com/564x/9c/a5/60/9ca56053c65b1447b186514d13083d7a.jpg","https://i.pinimg.com/564x/30/fb/9f/30fb9fe66ec8f535d5bcf694e7779293.jpg","https://i.pinimg.com/564x/a7/0e/dd/a70eddab2b710e23b115aae2b96a65e2.jpg","https://i.pinimg.com/564x/1c/e2/c5/1ce2c54b97e7205fa68c8f152d2e9fc7.jpg","https://i.pinimg.com/564x/e3/43/8b/e3438be5897e90067c59007fd59a29cd.jpg","https://i.pinimg.com/564x/d4/60/e6/d460e6edba8ec4df3bdb32290eaa679b.jpg"],
    galeriaDesign:["https://i.pinimg.com/564x/62/46/ed/6246ed389ddc3820576175f182e27713.jpg","https://i.pinimg.com/564x/15/4e/e1/154ee19ed365fd911dd822e67244587c.jpg","https://i.pinimg.com/564x/18/1a/d3/181ad3685a7200486b98aed8fe7643ff.jpg","https://i.pinimg.com/564x/cf/ad/05/cfad05b0f2d155262c20cfe50bf7b025.jpg","https://i.pinimg.com/564x/5c/2d/de/5c2dde1c9f45cbe8170196795d713377.jpg","https://i.pinimg.com/564x/ef/a7/e5/efa7e50633b382c598e7637afc504310.jpg","https://i.pinimg.com/564x/9f/d8/3b/9fd83be32a4b13d49585277f2b2d134a.jpg","https://i.pinimg.com/564x/ee/9c/4a/ee9c4a5e966411fd8785f12a7c6d8376.jpg","https://i.pinimg.com/564x/09/17/6c/09176c1c04bc50ff8d9829efe414b708.jpg","https://i.pinimg.com/564x/e7/db/e8/e7dbe8e6b1dad57f4bda1bb05ff5c7b6.jpg"]
  },
  {
    nombre: "Maria",
    rutaImagen: "https://i.pinimg.com/564x/7b/5f/2e/7b5f2e7493d188e7539b38ddb4ebfd0f.jpg",
    description:"El nombre blackwork viene de los términos ingleses black, negro, y work, trabajo. Esta técnica utiliza únicamente tinta negra en sus diseños, pero hay una sutil diferencia con otros estilos, como el realista. La tinta no se aplica haciendo sombreados o degradados, sino que se delimita en zonas marcadas.",
    estilo: "Blackwork",
    galeria:["https://i.pinimg.com/564x/29/5a/b3/295ab3dfac8b8dd6285e136ca664595f.jpg","https://i.pinimg.com/564x/f2/37/a3/f237a38a71244a1a986db441f8b7e3c6.jpg","https://i.pinimg.com/564x/0b/ab/85/0bab859962430c6535b3ef45ab307659.jpg","https://i.pinimg.com/564x/98/17/6f/98176fac8102decffdd5532a79756c62.jpg","https://i.pinimg.com/564x/38/b2/19/38b219d50497fe624eba324af35139d2.jpg","https://i.pinimg.com/564x/bf/17/d8/bf17d88a23f7d227df03e132247548a1.jpg","https://i.pinimg.com/564x/91/c6/ac/91c6ac466c43a0f67a76bc6d62e195e7.jpg","https://i.pinimg.com/564x/7a/cd/6c/7acd6c43b4247c7773f2c83c2b767a41.jpg","https://i.pinimg.com/564x/2b/71/ad/2b71adc737112ef0419090e0428a9b24.jpg","https://i.pinimg.com/564x/00/da/84/00da844da45fe1d5adafd7714aecb9d9.jpg"],
    galeriaDesign:["https://i.pinimg.com/564x/2a/ea/9c/2aea9cae5d84818291557e88655cf3c0.jpg","https://i.pinimg.com/564x/08/97/be/0897be3b822179e19f286d4a3983d9d7.jpg","https://i.pinimg.com/564x/a0/c4/a1/a0c4a17092cd948dedc04abe8b3a6ba5.jpg","https://i.pinimg.com/564x/21/99/01/2199017a579ab8d32b0aae1cbaabb8db.jpg","https://i.pinimg.com/564x/56/37/29/56372919dd3ace3b709b8e79a4737293.jpg","https://i.pinimg.com/564x/94/55/d4/9455d4a5d6c1714036e6dd91cab4dd0f.jpg","https://i.pinimg.com/564x/0b/3a/20/0b3a20e91a0c87282214e4674aeefba3.jpg","https://i.pinimg.com/564x/f5/9a/f6/f59af6e85731ce226761b0ab291b4da4.jpg","https://i.pinimg.com/564x/18/e8/1c/18e81cc2eadfc9c503b9d3db00bcc20e.jpg","https://i.pinimg.com/564x/0e/e1/85/0ee185a1cda5be740e766dd35fc0e95c.jpg"],
  },
  ];
}
