
#### 4.2. Anaconda environments:

 Anaconda Python 3.7 for VIDIA has been loaded. Python Quantum Chemistry packages have been installed into conda
 environments. Initialize the conda environment, list the available environments and activate the one that you want to use as
 follows:

    module load vidia/libra
    eval "$(/util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/bin/conda shell.bash hook)"
    conda info --envs
    conda activate environment-name

 Replace ``environment-name`` with the actual name of one of the available environments:
  
 Conda environments:

   * base /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10

   * libra-py3dmol /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/envs/libra-py3dmol

   * psi4 /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/envs/psi4

   * pyglet /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/envs/pyglet

   * pyquante2 /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/envs/pyquante2

   * pyscf /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/envs/pyscf

   * qmflows /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/envs/qmflows


 Example:

    (base) [cdc@vortex1:~]$ conda activate libra-py3dmol
    (libra-py3dmol) [cdc@vortex1:~]$ echo $LD_LIBRARY_PATH
    /util/academic/vidia/quantum-chemistry/2019Fall/py37/anaconda-2019.10/lib:/util/academic/vidia/quantum-chemistry/2019Fall/py37
    /Libra/libra-code/build/src

