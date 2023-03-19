<template>
  <div class="row">
    <!--Left side of the page-->
    <div class="col-md-6 form-group border-right mt-5">
      <select class="form-select w-100 formArea" v-model="objectType">
        <option value="" disabled selected>Eşya Tipi Seçiniz</option>
        <option
          v-for="objectTypeOption in objectTypeOptions"
          :value="objectTypeOption.id"
          :key="objectTypeOption.id"
        >
          {{ objectTypeOption.name }}
        </option>
      </select>
      <select class="form-select w-100 formArea" v-model="objectKind">
        <option value="" disabled selected>Eşya Türü Seçiniz</option>
        <option
          v-for="objectKindOption in objectKindOptions"
          :value="objectKindOption.id"
          :key="objectKindOption.id"
        >
          {{ objectKindOption.name }}
        </option>
      </select>
      <select class="form-select w-100 formArea" v-model="isObjectOk">
        <option value="" disabled selected>Eşya Çalışır Durumda mı?</option>
        <option value="yes">Evet</option>
        <option value="no">Hayır</option>
      </select>
      <div
        class="container border rounded d-flex flex-column p-4 formArea"
        :style="{
          fontSize: '18px',
          color: '#9da8c2',
          padding: '50px',
          textAlign: 'center',
        }"
      >
        <button
          v-if="!imageUploaded"
          class="d-flex flex-column align-items-center"
          @click="uploadImage"
        >
          <span><img src="../../assets/addImage.png" alt="" /></span>
          <span class="mt-3"> Fotoğraf Yükle </span>
        </button>
        <div v-else>
          <span
            class="material-icons d-flex justify-content-end"
            style="margin-bottom: -15px; margin-right: -10px"
            @click="removeImage"
          >
            close
          </span>
          <div class="py-3 rounded" style="background-color: #f3f5fc">
            <span><img src="../../assets/addImage.png" alt="" /></span>
          </div>
        </div>
      </div>
      <select class="form-select w-100 formArea" v-model="amount">
        <option value="" disabled selected>Adet</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        type="text"
        class="form-control formArea"
        placeholder="Eşyanın Alınacağı Adres"
        v-model="address"
      />
      <input
        type="text"
        class="form-control formArea"
        placeholder="Teslim Edecek Kişi Telefon No"
        v-model="gsmNo"
      />
      <button
        :class="[
          !objectType ||
          !objectKind ||
          !isObjectOk ||
          !amount ||
          !address ||
          !gsmNo
            ? 'btn-secondary'
            : 'btn-success-area',
        ]"
        class="btn w-100"
        :disabled="
          !objectType ||
          !objectKind ||
          !isObjectOk ||
          !amount ||
          !address ||
          !gsmNo
        "
        @click="addItem"
      >
        Ekle
      </button>
    </div>
    <!--Right side of the page-->
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <div
        v-if="!isAdded"
        class="container border rounded mx-5"
        :style="{
          fontSize: '18px',
          color: '#9da8c2',
          padding: '50px',
          textAlign: 'center',
        }"
      >
        Eşya Bağışı Bulunmamaktadır
      </div>
      <div
        v-if="isAdded"
        class="container mx-5 d-flex flex-column justify-content-between"
      >
        <ul style="list-style-type: none" class="ps-0 itemList">
          <li>
            <div
              v-for="(item, index) in itemArray"
              :key="index"
              class="itemListBorder row"
            >
              <div v-if="item.itemImage != ''">
                <span
                  class="material-icons d-flex justify-content-end"
                  style="
                    margin-bottom: -15px;
                    margin-right: -10px;
                    position: relative;
                    z-index: 9999;
                  "
                  @click="removeImageFromArray(index)"
                >
                  close
                </span>
                <img :src="item.itemImage" alt="" />
              </div>
              <div>
              <span
                class="material-symbols-outlined d-flex justify-content-end mt-2"
                style="color: #cecece; margin-bottom: -15px;
                    margin-right: -10px;
                    position: relative;
                    z-index: 9999;"
                    @click="removeItemFromArray(index)"
              >
                delete
              </span>
              <div>
                Eşya Tipi: <span>{{ item.objectType }}</span>
              </div>
              <div>
                Eşya Türü: <span>{{ item.objectKind }}</span>
              </div>
              <div>
                Adet: <span>{{ item.amount }}</span>
              </div>
              <div>
                Telefon: <span>{{ item.gsmNo }}</span>
              </div>
              <div>
                Adres: <span>{{ item.address }}</span>
              </div>
            </div>
          </div>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="material-icons me-3" style="width: 20px; height: 20px">
            radio_button_checked
          </span>
          <a
            href="/"
            style="font-size: 12px; font-weight: 600px; color: #9da8c3"
            >Bağış Metni</a
          >
        </div>
        <a href="/">
        <button class="btn w-100 mt-3 btn-success-area">Gönder</button>
        </a>
        <button
          class="btn w-100 mt-3"
          style="border: 2px solid #41cb83; color: #41cb83"
          @click="addNewItem"
        >
          Yeni Eşya Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const objectType = ref<string>("");
    const objectKind = ref<string>("");
    const isObjectOk = ref<any>("");
    const amount = ref<any>("");
    const address = ref<string>("");
    const gsmNo = ref<string>("");
    const isAdded = ref<boolean>(false);
    const imageUploaded = ref<boolean>(false);
    const itemImage = ref<string>("");
    const itemArray = ref<Array<any>>([]);
    const objectTypeName = ref<any>();
    const objectKindName = ref<any>();

    // Arrays for form select dropdown
    const objectTypeOptions = ref<Array<{ id: string; name: string }>>([
      { id: "new", name: "Sıfır" },
      { id: "second", name: "İkinci El" },
    ]);

    const objectKindOptions = ref<
      Array<{ id: string; name: string; src: string }>
    >([
      {
        id: "furniture",
        name: "Koltuk Takımı",
        src: "src/assets/objects/koltuk-takimi.png",
      },
      {
        id: "bed",
        name: "Yatak Takımı",
        src: "src/assets/objects/koltuk-takimi.png",
      },
    ]);

    watch(objectType, (newVal) => {
      objectTypeName.value =
        objectTypeOptions.value.find((objType) => objType.id === newVal)
          ?.name || "";
    });
    watch(
      () => [objectKind.value, imageUploaded.value],
      ([newVal, imageStatus]) => {
        objectKindName.value =
          objectKindOptions.value.find((objKind) => objKind.id === newVal)
            ?.name || "";
        if (imageStatus) {
          itemImage.value =
            objectKindOptions.value.find((objKind) => objKind.id === newVal)
              ?.src || "";
        } else {
          itemImage.value = "";
        }
      }
    );
    // Add form selected items to an array
    function addItem() {
      isAdded.value = true;
      itemArray.value.push({
        objectType: objectTypeName.value,
        objectKind: objectKindName.value,
        amount: amount.value,
        address: address.value,
        gsmNo: gsmNo.value,
        itemImage: itemImage.value,
      });
      console.log(itemArray.value);
    }
    // It just checks the button clicked or not and change style
    function uploadImage() {
      imageUploaded.value = true;
    }
    // Close icon clicked to remove uploaded image from form
    function removeImage() {
      imageUploaded.value = false;
    }
    // Close icon clicked to delete image from the list
    function removeImageFromArray(index) {
      itemArray.value[index].itemImage = "";
    }
    // Trash icon is clicked --> remove an item at that index in array
    function removeItemFromArray(item){
      itemArray.value.splice(item, 1);
    }
    // "Yeni Eşya Ekle" buttonu tıklandı
    function addNewItem(){
      objectType.value = "";
      objectKind.value = "";
      amount.value = "";
      address.value = "";
      isObjectOk.value = "";
      gsmNo.value = "";
      itemImage.value = "";
      imageUploaded.value = false;
    }
    return {
      objectType,
      objectKind,
      isObjectOk,
      amount,
      address,
      gsmNo,
      objectTypeOptions,
      objectKindOptions,
      addItem,
      isAdded,
      itemArray,
      uploadImage,
      imageUploaded,
      removeImage,
      removeImageFromArray,
      removeItemFromArray,
      addNewItem,
    };
  },
});
</script>

<style scoped>
.border-right {
  padding-right: 65px;
  border-right: 1px solid black;
}
.itemList {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 440px;
}
.formArea {
  margin-bottom: 16px;
  border: #9da8c2 solid 2px;
  color: #9da8c2;
  border-radius: 10px;
  padding: 8px;
  padding-left: 24px;
}
.itemListBorder {
  border: #9da8c2 solid 2px;
  border-radius: 10px;
  margin: 15px;
  margin-left: 0;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
}
.btn-success-area {
  background-color: #41cb83;
  color: #ffffff;
}
::-webkit-scrollbar {
  width: 6px;
}
/* Scrollbar styles */
/* Track */
::-webkit-scrollbar-track {
  box-shadow: #f0f0f0;
  border-radius: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #41cb83;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #41cb83;
}
</style>
