<template>
  <v-card class="pa-4 mb-4" elevation="1">
    <v-card-title class="text-h6 mb-4">Informações de Entrega</v-card-title>

    <v-form ref="form">
      <v-text-field
        v-model="entrega.nome"
        label="Nome Completo"
        :rules="[v => !!v || 'Nome é obrigatório']"
        required
      />
      <v-text-field
        v-model="entrega.cpfCnpj"
        label="CPF ou CNPJ"
        :rules="[
          v => !!v || 'CPF/CNPJ é obrigatório',
          v => validarCpfOuCnpj(v) || 'CPF ou CNPJ inválido'
        ]"
        required
      />
      <v-text-field
        v-model="entrega.email"
        label="Email"
        :rules="[
          v => !!v || 'Email é obrigatório',
          v => /.+@.+\..+/.test(v) || 'Email deve ser válido'
        ]"
        required
      />
      <v-text-field
        v-model="entrega.telefone"
        label="Telefone"
        :rules="[v => !!v || 'Telefone é obrigatório']"
        required
      />
      <v-text-field
        v-model="entrega.endereco"
        label="Endereço"
        :rules="[v => !!v || 'Endereço é obrigatório']"
        required
      />
      <v-text-field
        v-model="entrega.numero"
        label="Número"
        :rules="[v => !!v || 'Número é obrigatório']"
        required
      />
      <v-text-field
        v-model="entrega.complemento"
        label="Complemento"
      />
      <v-text-field
        v-model="entrega.bairro"
        label="Bairro"
        :rules="[v => !!v || 'Bairro é obrigatório']"
        required
      />
      <v-text-field
        v-model="entrega.cidade"
        label="Cidade"
        :rules="[v => !!v || 'Cidade é obrigatória']"
        required
      />
      <v-text-field
        v-model="entrega.estado"
        label="Estado"
        :rules="[v => !!v || 'Estado é obrigatório']"
        required
      />
      <v-text-field
        v-model="entrega.cep"
        label="CEP"
        :rules="[v => !!v || 'CEP é obrigatório']"
        required
      />

      <v-row class="mt-6" justify="space-between">
        <!-- Anterior SEM validação -->
        <v-btn color="secondary" @click="emit('voltarStep')">
          Anterior
        </v-btn>

        <!-- Próximo COM validação -->
        <v-btn color="primary" @click="proximo">
          Próximo
        </v-btn>
      </v-row>
    </v-form>
  </v-card>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['voltarStep', 'proximoStep'])

const form = ref(null)

const entrega = reactive({
  nome: '',
  cpfCnpj: '',
  email: '',
  telefone: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  cep: ''
})

function validarFormulario() {
  return form.value ? form.value.validate() : false
}

function proximo() {
  if (validarFormulario()) {
    emit('proximoStep')
    console.log('Dados de entrega:', entrega)
  }
}

defineExpose({ validarFormulario })

function validarCpf(cpf) {
  if (!cpf || cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false
  let soma = 0
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i)
  let resto = 11 - (soma % 11)
  let dig1 = resto >= 10 ? 0 : resto
  if (dig1 !== parseInt(cpf.charAt(9))) return false
  soma = 0
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i)
  resto = 11 - (soma % 11)
  let dig2 = resto >= 10 ? 0 : resto
  return dig2 === parseInt(cpf.charAt(10))
}

function validarCnpj(cnpj) {
  if (!cnpj || cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  let digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) pos = 9
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== parseInt(digitos.charAt(0))) return false
  tamanho += 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) pos = 9
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  return resultado === parseInt(digitos.charAt(1))
}

function validarCpfOuCnpj(valor) {
  const cleaned = valor.replace(/\D/g, '')
  if (cleaned.length === 11) return validarCpf(cleaned)
  if (cleaned.length === 14) return validarCnpj(cleaned)
  return false
}
</script>
