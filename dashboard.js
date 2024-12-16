// CIHUYYYYYYY //


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("chart");
  const dummy = document.querySelectorAll(".dummy-randomize");
  const cls2 = document.querySelector("#cihuyyyy");
  const s1 = document.getElementById("speed-1")
  const s1Img = document.querySelectorAll("#speed-1 img")
  const s2 = document.getElementById("speed-2")
  const s2Img = document.querySelectorAll("#speed-2 img")

  let isHover = true;

  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 800, 0, 200);

  gradient.addColorStop(0, "#3F977F");
  gradient.addColorStop(0.8, "#4FC34F");
  gradient.addColorStop(1, "#3BA3C3");

  /**
   * Membuat nomer acak dari (min) sampai (max)
   * 
   * @param {number} min // dari
   * @param {number} max // sampai
   * 
   * @returns {number}
   */
  const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let data = [];
  let indonesia;
  data = [
    { year: "Januari", count: randomize(10, 30) },
    { year: "Februari", count: randomize(10, 30) },
    { year: "Maret", count: randomize(10, 30) },
    { year: "April", count: randomize(10, 30) },
    { year: "Mei", count: randomize(10, 30) },
    { year: "Juni", count: randomize(10, 30) },
    { year: "Juli", count: randomize(10, 30) },
    { year: "Agustus", count: randomize(10, 30) },
    { year: "September", count: randomize(10, 30) },
    { year: "Oktober", count: randomize(10, 30) },
    { year: "November", count: randomize(10, 30) },
    { year: "desember", count: randomize(10, 30) },
  ];

  setInterval(() => {
    dummy.forEach((element) => {
      element.textContent = randomize(150, 1000);
    })
    indonesia.data.datasets.forEach(dataset => {
      dataset.data = Array.from({length: 12}).map(_ => randomize(5, 30));
    });
    indonesia.update()
  }, 3000)
  
  indonesia = new Chart(
    document.getElementById('chart'),
    {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Pengguna Baru',
            data: data.map(row => row.count),
            backgroundColor: gradient
          }
        ]
      }
    }
  );
  
  let anim;
  let i = 0
  let delta = 0.1
  const decrease = () => {
    if (i > 360) {
      i = 0
    } else if (i < 0) {
      i = 360
    } else {
      i += delta
      s1.style = `transform: rotate(${i}deg);`
      s2.style = `transform: rotate(-${i}deg);`
      s1Img.forEach((e) => {
        e.style = `transform: rotate(-${i}deg);`
      })
      s2Img.forEach((e) => {
        e.style = `transform: rotate(${i}deg);`
      })
    }
    anim = window.requestAnimationFrame(decrease)
  }
  
  function startAnim() {
    anim = window.requestAnimationFrame(decrease)
  }
  
  function endAnim() {
    window.cancelAnimationFrame(anim)
  }
  
  startAnim()
  
  cls2.addEventListener("mousedown", async () => {
    isHover = true
    while (delta < 10 && isHover) {
      delta += 0.1
      await new Promise(resolve => setTimeout(resolve, 50))
    }
  })

  async function res() {
    isHover = false
    while (delta > -0.1) {
      delta += -0.1
      await new Promise(resolve => setTimeout(resolve, 50))
    }
  }
  
  cls2.addEventListener("mouseup", res)
})