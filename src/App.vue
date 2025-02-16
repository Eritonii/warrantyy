<template>
  <div ref="printSection" class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
    <div class="flex justify-between">
      <!-- Informacioni i Kompanisë në anën e majtë -->
      <div class="w-1/2">
        <h1 class="text-2xl font-bold">PROmobile STORE</h1>
        <p class="pt-1">Company Name: Pro Mobile Store</p>
        <p class="pt-1">Address: Rr. Ahmet Kaçiku - Ferizaj</p>
        <p class="pt-1">Email: Promobilestoresphk@gmail.com</p>
        <p class="pt-1">Phone: +38348200020 | +38348900090</p>
      </div>

      <!-- QR Code Link në anën e djathtë -->
      <div class="flex justify-start ml-16">
        <canvas ref="qrcodeCanvas"></canvas> <!-- Krijoni një canvas për QR Code -->
      </div>
    </div>

    <!-- Titulli i Garancionit në mes -->
    <div class="text-center my-6">
      <h2 class="text-2xl font-bold">Garancioni / Warranty</h2>
    </div>

    <!-- Përmbajtja kryesore -->
    <div class="grid grid-cols-2 gap-6 mt-4">
      <!-- Informacion mbi Produktin -->
      <div class="border-r-2 border-gray-300 pr-6">
        <h3 class="text-lg font-semibold mb-4">Informacion mbi Produktin</h3>
        
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Lloji i Produktit / Product Type</label>
          <input type="text" class="w-full p-2 border rounded-lg">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Nr. Serik / IMEI</label>
          <input type="text" class="w-full p-2 border rounded-lg">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Data / Date</label>
          <input type="date" class="w-full p-2 border rounded-lg">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Adresa / Address</label>
          <input type="text" class="w-full p-2 border rounded-lg">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Garancioni / Warranty Period</label>
          <input type="text" class="w-full p-2 border rounded-lg">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Qmimi / Price</label>
          <input type="text" class="w-full p-2 border rounded-lg">
        </div>
      </div>

      <!-- Kushtet e Garancionit -->
      <div class="pl-6">
        <h3 class="text-lg font-semibold mb-4">Kushtet e Garancionit</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Fleta e garancionit i lëshohet blerësit dhe vlen bazuar në ligjet aktuale. Nëse produkti ka defekte, shërbimi është falas brenda periudhës së garancionit. Garancioni nuk mbulon dëmet e shkaktuara nga përdorimi i gabuar ose ndërhyrja e paautorizuar.
          <br><br>
          Blerësi duhet të ruajë këtë dokument për të përfituar nga garancioni. Garancioni nuk vlen në rastet kur pajisja ka shenja dëmtimi fizik, lagështirë ose ndërhyrje joautorizuar.
        </p>
      </div>
    </div>

    <!-- Firmat -->
    <div class="flex justify-between mt-6">
      <div>
        <p class="font-bold">Blerësi / Buyer</p>
        <br>
        <div class="border-t border-black w-40 mt-2"></div>
      </div>
      <div>
        <p class="font-bold">Shitësi / Seller</p>
        <br>
        <div class="border-t border-black w-40 mt-2"></div>
      </div>
    </div>

    <!-- Butonat për printim dhe save PDF -->
    <div v-if="!isPrinting" class="flex justify-center mt-4 print:hidden">
      <button @click="printPage" class="flex items-center bg-green-500 text-white p-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 mx-2">
        <!-- Ikona e printimit me tekst -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m7 7h4m-2-2v4m0-4v-4m6 0a2 2 0 10-4 0h4zM3 3h18v18H3V3z" />
        </svg>
        <span>Printo</span>
      </button>

      <button @click="saveAsPDF" class="flex items-center bg-blue-500 text-white p-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 mx-2">
        <!-- Ikona e ruajtjes si PDF me tekst -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18V3H3zM9 14l3-3 3 3m0 0V7m-3 7V7" />
        </svg>
        <span>Ruaj PDF</span>
      </button>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

export default {
  mounted() {
    this.generateQRCode();
  },
  methods: {
    // Funksioni për krijimin e QR Code
    generateQRCode() {
      const canvas = this.$refs.qrcodeCanvas;
      const qrData = 'https://example.com'; // Vendosni URL-në ose të dhënat që dëshironi të përfaqësohen nga QR code

      QRCode.toCanvas(canvas, qrData, function (error) {
        if (error) console.error(error);
      });
    },

    // Funksioni për printim
    printPage() {
      window.print();
    },

    // Funksioni për ruajtjen si PDF
    saveAsPDF() {
      const doc = new jsPDF();
      const elementHTML = this.$refs.printSection;

      doc.html(elementHTML, {
        callback: function (doc) {
          doc.save('garancion.pdf');
        },
        margin: [10, 10, 10, 10],
        x: 10,
        y: 10
      });
    }
  }
};
</script>

<style scoped>
@media print {
  .print\\:hidden {
    display: none;
  }
}
</style>
