export const HEADER = {
  title: `Computer Vision Notebooks`,
  description: `An authorial collection of fundamental <span class="emphasis1">python recipes</span> on <span class="stripe"><span class="emphasis2">Computer Vision</span> and <span class="emphasis2">Digital Image Processing</span></span>.`,
};

export const INDEX = [
  // ! Computer Vision Fundamentals
  {
    id: "Computer-Vision-Fundamentals",
    name: "Computer Vision Fundamentals",
    description:
      "Implementation of some key concepts and the main algorithms of <em>digital image processing</em> and <em>computer vision</em> from scratch.",
    notebooks: [
      {
        id: "auto_color_adjustment",
        name: "Auto Color Adjustment",
        description:
          "Methods which provide color adjustment without input parameters.",
      },
      {
        id: "2D_discrete_cosine_transform",
        name: "Bi-dimensional Discrete Cosine Transform",
        description:
          "Overview and implementation of bi-dimensional discrete space cosine transform.",
      },
      {
        id: "2D_discrete_fourier_transform",
        name: "Bi-dimensional Discrete Fourier Transform",
        description:
          "Overview and implementation of bi-dimensional discrete space <em>Fourier</em> transform.",
      },
      {
        id: "border_padding",
        name: "Border Padding",
        description:
          "Bi-dimensional image padding for spatial filtering and convolution.",
      },
      {
        id: "color_models",
        name: "Color Models",
        description:
          "A brief overview of the main color models with interactive visualization.",
      },
      {
        id: "compositing_operators",
        name: "Compositing Operators",
        description: "Methods for combining and mixing images.",
      },
      {
        id: "connectedComponent_analysis",
        name: "Connected-element Analysis",
        description:
          "Find and label bi-dimensional subsets of connected elements.",
      },
      {
        id: "2D_discrete_convolution",
        name: "Bi-dimensional Discrete Convolution",
        description:
          "Naive implementation of bi-dimensional discrete convolution.",
      },
      {
        id: "2D_discrete_correlation",
        name: "Bi-dimensional Discrete Correlation",
        description:
          "Naive implementation of bi-dimensional discrete correlation.",
      },
      {
        id: "grayscale_conversion",
        name: "Grayscale Conversion",
        description: "Color image conversion methods from RGB to grayscale.",
      },
      {
        id: "histogram_equalization",
        name: "Histogram Equalization",
        description:
          "Histogram equalization concept and algorithm applied to digital image color processing.",
      },
      {
        id: "stacking",
        name: "Image Stacking",
        description:
          "Implementation of solution to image stacking and statistical blending.",
      },
      {
        id: "radon_transform",
        name: "Radon Transform",
        description: "Overview and implementation of discrete Radon transform.",
      },
      {
        id: "sobel_operator",
        name: "Sobel Operator",
        description: "Sobel and gradient operation with spatial filtering.",
      },
      {
        id: "thresholding",
        name: "Thresholding",
        description: "Methods for image binary segmentation.",
      },
    ],
  },
  // ! Computer Vision Experiments
  {
    id: "Computer-Vision-Experiments",
    name: "Computer Vision Experiments",
    description:
      "Practical experiments and applications of <em>computer vision</em>.",
    notebooks: [
      {
        id: "MNIST_classification",
        name: "MNIST Classification",
        description:
          "Digit classification using <em>Shallow Neural Network</em> and <em>Convolutional Neural Network</em>.",
      },
      {
        id: "CIFAR10_classification",
        name: "CIFAR10 Classification",
        description:
          "Image classification using <em>Convolutional Neural Network</em> and <em>Cifar-10 dataset</em>.",
      },
      {
        id: "YOLOv3_object_detection",
        name: "YOLOv3 Object Detection",
        description:
          "Object detection with <strong>YOLOv3</strong> and <em>OpenCV</em>.",
      },
    ],
  },
  // ! Mathematical Foundations
  {
    id: "Mathematical-Foundations",
    name: "Mathematical Foundations",
    description:
      "Main mathematical concepts applied to <em>Computer Vision</em>.",
    notebooks: [
      {
        id: "calculus_fourier-series",
        name: "Calculus - Fourier Series",
        description: "Brief overview of <em>Fourier series</em>.",
      },
      {
        id: "linear-algebra_vectors",
        name: "Linear Algebra - Vectors",
        description: "Linear Algebra topic about <em>Vectors</em>.",
      },
      {
        id: "linear-algebra_matrices",
        name: "Linear Algebra - Matrices",
        description: "Linear Algebra topic about <em>Matrices</em>.",
      },
      {
        id: "dissimilarity_measures",
        name: "Dissimilarity Measure",
        description: "Overview about dissimilarity and distance measure.",
      },
    ],
  },
  // ! Computer Graphics
  {
    id: "Computer-Graphics",
    name: "Computer Graphics",
    description:
      "Demonstrations and studies involving some quite important topics about <em>computer graphics</em>.",
    notebooks: [
      {
        id: "2DTransformation_Matrix",
        name: "2D Transformation Matrices",
        description:
          "Overview and application of bi-dimensional transformation matrices.",
      },
      {
        id: "3DTransformation_Matrix",
        name: "3D Transformation Matrices",
        description:
          "Overview and application of tri-dimensional transformation matrices.",
      },
      {
        id: "ray-intersection_sphere",
        name: "Ray-Sphere Intersection",
        description: "Implementation of ray-sphere intersection algorithm.",
      },
      {
        id: "ray-intersection_triangle",
        name: "Ray-Triangle Intersection",
        description: "Implementation of ray-triangle intersection algorithm.",
      },
    ],
  },
  // ! Digital Signal Processing
  {
    id: "Digital-Signal-Processing",
    name: "Digital Signal Processing",
    description:
      "Implementation of key concepts and the main algorithms of <em>digital signal processing</em>.",
    notebooks: [
      {
        id: "instantaneous_frequency_FM",
        name: "Instantaneous Frequency",
        description:
          "Analytical approach to continuous <em>Instantaneous Frequency</em> and <em>Frequency Modulation</em>.",
      },
      {
        id: "signal_discontinuity_naive",
        name: "Signal Discontinuity [naive]",
        description:
          "Naive solution to solve the frequency discontinuity between two concatenated signals.",
      },
      {
        id: "waveform_sinusoidal",
        name: "Sinusoidal Periodic Waveform",
        description:
          "Overview about <em>sinusoidal periodic waveform</em> or <em>sine wave</em> function.",
      },
      {
        id: "waveform_non-sinusoidal",
        name: "Non-Sinusoidal Periodic Waveform",
        description:
          "Overview about <em>non-sinusoidal periodic waveforms</em>.",
      },
      {
        id: "waveform_noise",
        name: "Noise Colors",
        description:
          "Overview and implementation of <em>noise</em> functions, focusing on their <em>power spectrum</em>.",
      },
    ],
  },
  // ! Tips & Tricks
  {
    id: "Tips-and-Tricks",
    name: "Tips & Tricks",
    description:
      "<p>A gathering of <em>Tips &amp; Tricks</em> involving any supporting information for <em>computer vision</em> in general.</p>",
    notebooks: [
      {
        id: "basics_Numba",
        name: "Basics [Numba]",
        description:
          "Basic functions and high performance operations using Numba and Python.",
      },
      {
        id: "basics_Cython",
        name: "Basics [Cython]",
        description:
          "Basic functions and high performance operations using Cython and Python.",
      },
      {
        id: "matplotlib_3D",
        name: "Matplotlib 3D",
        description: "Examples of 3D visualization using Matplotlib.",
      },
      {
        id: "matplotlib_figures",
        name: "Matplotlib Figures",
        description: "Examples of figure visualization using Matplotlib.",
      },
      {
        id: "audio_libraries",
        name: "Python Audio Libraries",
        description:
          "Brief overview about some of the main python libraries that promote input and output of digital signal files.",
      },
      {
        id: "image_libraries",
        name: "Python Image Libraries",
        description:
          "Brief overview about some of the main python libraries that promote input and output of digital image files.",
      },
    ],
  },
];
