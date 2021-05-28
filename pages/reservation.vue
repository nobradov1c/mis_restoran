<template>
  <div class="page spaced has-text-white">
    <div v-show="formSent === true">
      <h1 class="title has-text-white">
        Thank you for making a reservation with us!
      </h1>
    </div>
    <div v-if="formSent === false">
      <h1 class="title has-text-white">Make your reservation</h1>

      <form class="mt-6" @submit.prevent="submitForm">
        <div class="field">
          <label class="label has-text-info" for="name">Name</label>
          <div class="control has-icons-left">
            <input
              id="name"
              v-model="name"
              class="input"
              type="text"
              placeholder="Your name"
              required
            />
            <span class="icon is-small is-left">
              <UserSolidSvg />
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label has-text-info" for="email">Email</label>
          <div class="control has-icons-left">
            <input
              id="email"
              v-model="email"
              class="input"
              type="email"
              placeholder="hello@example.com"
              required
            />
            <span class="icon is-small is-left">
              <EnvelopeSolidSvg />
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label has-text-info" for="reservation-date"
            >Choose a day</label
          >
          <div class="control">
            <input id="reservation-date" type="date" />
          </div>
        </div>

        <div class="field">
          <label class="label has-text-info" for="reservation-date"
            >Choose time</label
          >
          <div class="control">
            <input id="reservation-time" type="time" />
          </div>
        </div>

        <div class="field">
          <label class="label has-text-info" for="number-of-seats"
            >Choose number of seats</label
          >
          <input
            id="number-of-seats"
            class="input"
            type="number"
            placeholder="MAX 8"
            max="8"
          />
        </div>

        <div class="field">
          <label class="label has-text-info" for="message">Note</label>
          <div class="control">
            <textarea
              id="message"
              v-model="message"
              class="textarea"
              placeholder="Optional notes"
              maxlength="2000"
            ></textarea>
          </div>
          <p v-show="message.length === 2000" class="help is-danger">
            Max 2000 characters
          </p>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button
              class="button is-link"
              :class="{ 'is-loading': isLoading }"
              type="submit"
            >
              <span> Send </span>
              <span class="icon">
                <PaperPlaneSolidSvg />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import EnvelopeSolidSvg from 'assets/images/icons/solid/envelope.svg?inline'
import UserSolidSvg from 'assets/images/icons/solid/user.svg?inline'
import PaperPlaneSolidSvg from 'assets/images/icons/solid/paper-plane.svg?inline'

const name = 'ContactPage'

const components = {
  EnvelopeSolidSvg,
  UserSolidSvg,
  PaperPlaneSolidSvg,
}

function data() {
  return {
    name: '',
    email: '',
    message: '',
    formSent: false,
    isLoading: false,
  }
}

const methods = {
  async submitForm() {
    this.isLoading = true

    const formData = new FormData()
    formData.append('name', this.name)
    formData.append('email', this.email)
    formData.append('message', this.message)

    const url = 'https://mailer.obradovicnikola.xyz/mail'
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    await xhr.send(formData)

    this.isLoading = false
    this.formSent = true
  },
}

export default { name, components, data, methods }
</script>

<style></style>
