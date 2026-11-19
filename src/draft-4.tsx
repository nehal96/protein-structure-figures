// The fourth draft’s figures, in essay order, with the essay’s own titles and captions.
import type { Entry } from "./entry";
import {
  Figure,
  Plate,
  Sketch,
  AxisSigns,
  Camera,
  Candidates,
  Darkness,
  Directions,
  Mercury,
  Patterson,
  PattersonRods,
  PerutzModel,
  PhaseGame,
  Resolution,
  SheetStack,
  UnitCell,
  Waves,
} from "./draft-4/index";

export const FIGURES: Entry[] = [
  {
    id: "waves",
    file: "Waves.tsx",
    section: "X-Rays",
    figure: (
      <Sketch caption="Drag the second wave to slide it left and right and see how phase affects the waves’ sum. In step, the two add up; opposed, they cancel. The second wave’s phase can also be shown as an angle, as shown in the circle.">
        <Waves />
      </Sketch>
    ),
  },
  {
    id: "unit-cell",
    file: "UnitCell.tsx",
    section: "X-Rays",
    figure: (
      <Sketch caption="On the left, one molecule scatters an x-ray too faintly to record. On the right, a crystal: the same molecule repeated, with one unit cell outlined.">
        <UnitCell />
      </Sketch>
    ),
  },
  {
    id: "directions",
    file: "Directions.tsx",
    section: "X-Rays",
    figure: (
      <Sketch caption="Drag the point along the film. Each line is one unit cell’s wave on its way there, and the waves beside it show whether they arrive in step.">
        <Directions />
      </Sketch>
    ),
  },
  {
    id: "darkness",
    file: "Darkness.tsx",
    section: "X-Rays",
    figure: (
      <Sketch caption="Drag the ringed atom. Its wave slides, the sum changes height, and the ringed spot gets darker or fainter.">
        <Darkness />
      </Sketch>
    ),
  },
  {
    id: "camera",
    file: "Camera.tsx",
    section: "The Big Idea",
    figure: (
      <Figure
        title="Perutz’s x-ray crystallography setup"
        subtitle="X-rays from the tube pass through the crystal and land on flat film. A nickel filter on the way lets through just one wavelength, and the crystal, sealed in a glass tube, is rocked a few degrees to catch more spots."
        caption="Not to scale. Based on Perutz and Rogers (1946) and Boyes-Watson, Davidson and Perutz (1947). Photograph: Bernal, Fankuchen and Perutz, Nature, 1938."
      >
        <Camera />
      </Figure>
    ),
  },
  {
    id: "phase-game",
    file: "PhaseGame.tsx",
    section: "The Big Idea",
    figure: (
      <Sketch caption="Slide the four waves until their sum matches the molecule, drawn in grey. Each wave comes from one spot on the film. The map below is what the same spots add up to with the waves where you have put them.">
        <PhaseGame />
      </Sketch>
    ),
  },
  {
    id: "boyes-watson-1947-layers",
    file: "public/images/first-structures/boyes-watson-1947-layers.png",
    section: "The Phase Problem",
    figure: (
      <Plate
        title="How Perutz pictured the crystal"
        subtitle="Perutz’s drawing of the packing: layers of molecules with liquid between them. One unit cell is outlined at front right."
        caption="Boyes-Watson, Davidson and Perutz, Proc. R. Soc. A 191, 1947, fig. 13."
      >
        <img
          src="/images/first-structures/boyes-watson-1947-layers.png"
          alt="Three layers of short flat cylinders packed side by side, with gaps between the layers and one slanted box outlined among them."
          className="mx-auto w-full max-w-md mix-blend-multiply"
        />
      </Plate>
    ),
  },
  {
    id: "patterson",
    file: "Patterson.tsx",
    section: "The Phase Problem",
    figure: (
      <Sketch caption="Drag an atom, or point at a peak. Each arrow between two atoms on the left ends on a peak when drawn from the center of the map on the right.">
        <Patterson />
      </Sketch>
    ),
  },
  {
    id: "patterson-rods",
    file: "PattersonRods.tsx",
    section: "The Phase Problem",
    figure: (
      <Plate
        title="The rods in Perutz’s map"
        subtitle="Seen straight down Perutz’s Patterson map, each ringed peak is the end of a rod. Drawn in 3D, the rods all run the same way, so Perutz read them as protein chains lying side by side in layers."
        caption="Perutz, Proc. R. Soc. A 195, 1949, fig. 21 (reprinted from Boyes-Watson, Davidson and Perutz, 1947, fig. 3a; rings added) and fig. 22."
      >
        <PattersonRods />
      </Plate>
    ),
  },
  {
    id: "mercury",
    file: "Mercury.tsx",
    section: "The Phase Problem",
    figure: (
      <Sketch caption="Drag the protein’s wave. The two spots on the right compare the protein alone with the protein plus mercury.">
        <Mercury />
      </Sketch>
    ),
  },
  {
    id: "axis-signs",
    file: "AxisSigns.tsx",
    section: "The Phase Problem",
    figure: (
      <Sketch caption="Slide the ringed atom. Seen down the axis, its twin moves the opposite way, and the pair’s sum keeps a crest or a trough on the axis: plus or minus. In the films below, the ringed spot got darker with mercury, so the protein has mercury’s sign there.">
        <AxisSigns />
      </Sketch>
    ),
  },
  {
    id: "candidates",
    file: "Candidates.tsx",
    section: "The Phase Problem",
    figure: (
      <Sketch caption="Drag the protein’s wave. With mercury, the solid and dashed candidates give the same sum. With a second heavy atom, their sums differ, and only one matches the film.">
        <Candidates />
      </Sketch>
    ),
  },
  {
    id: "resolution",
    file: "Resolution.tsx",
    section: "The Phase Problem",
    figure: (
      <Sketch caption="Drag the circle to choose which spots are used. The map on the right is made from only the spots inside it.">
        <Resolution />
      </Sketch>
    ),
  },
  {
    id: "sheet-stack",
    file: "SheetStack.tsx",
    section: "The Phase Problem",
    figure: (
      <Figure
        title="Kendrew’s 6 Å contour maps of myoglobin"
        subtitle="Each slice is a contour map of one plane through the crystal. The rings crowd together where there are most electrons, and the densest patch of all is the heme."
        caption="Eight of the sixteen slices; the other eight are the same slices turned over. Stacked farther apart than the real 1.93 Å, so each one shows. Traced from Bodo, Dintzis, Kendrew and Wyckoff (1959), figure 18."
      >
        <SheetStack />
      </Figure>
    ),
  },
  {
    id: "kendrew-1958-model",
    file: "public/images/first-structures/kendrew-1958-model.jpg",
    section: "The Phase Problem",
    figure: (
      <Plate
        title="Kendrew’s model of myoglobin"
        subtitle="Four views of the 6 Å model as it first appeared in print. The chain is white; the dark disk is the heme."
        caption="Kendrew et al., Nature 181, 1958, fig. 2, as reproduced in de Chadarevian (2018), fig. 6."
      >
        <img
          src="/images/first-structures/kendrew-1958-model.jpg"
          alt="Four photographs of a lumpy white tube twisting back on itself, with a dark disk tucked into it."
          className="mx-auto w-full max-w-md"
        />
      </Plate>
    ),
  },
  {
    id: "perutz-model",
    file: "PerutzModel.tsx",
    section: "The Phase Problem",
    figure: (
      <Figure
        title="Perutz’s model of human hemoglobin"
        subtitle="In 1967 Perutz built this model from painted wood, the way he built his first in 1959: each slice of the map cut out and stacked. The two kinds of chain are black and white, and each heme is a red disk."
        caption="Rebuilt from the modern structure of human hemoglobin (PDB 2HHB), blurred to 5.5 Å and cut into 2 Å slices as Perutz described in 1960. The original is at the Science Museum, London."
      >
        <PerutzModel />
      </Figure>
    ),
  },
];
