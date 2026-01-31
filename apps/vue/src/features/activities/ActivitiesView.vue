<script setup lang="ts">
import { reactive, ref } from "vue";

interface Activity {
  id: string;
  name: string;
}

type CreateActivity = Omit<Activity, "id">;

type UpdateActivity = Pick<Activity, "id"> & Partial<Activity>;

const createActivity = reactive<CreateActivity>({ name: "" });
const updateActivity = reactive<UpdateActivity>({ id: "" });
const readId = ref("");
const deleteId = ref("");

const readActivity = ref<Activity | null>(null);
const readActivities = ref<Activity[]>([]);

async function onCreate(event: SubmitEvent) {
  event.preventDefault();

  if (createActivity.name) {
    await fetch("http://localhost:3010/api/activities", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createActivity),
    });
  }
}

async function onRead(event: SubmitEvent) {
  event.preventDefault();

  if (readId.value) {
    const res = await fetch(`http://localhost:3010/api/activities/${readId.value}`);
    if (res.status !== 200) {
      readActivity.value = null;
      return;
    }
    readActivity.value = await res.json();
  }
}

async function onReadAll(event: SubmitEvent) {
  event.preventDefault();

  const res = await fetch("http://localhost:3010/api/activities");
  readActivities.value = await res.json();
}

async function onUpdate(event: SubmitEvent) {
  event.preventDefault();

  if (updateActivity.id) {
    await fetch(`http://localhost:3010/api/activities/${updateActivity.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...updateActivity,
        id: undefined,
      }),
    });
  }
}

async function onDelete(event: SubmitEvent) {
  event.preventDefault();

  if (deleteId.value) {
    await fetch(`http://localhost:3010/api/activities/${deleteId.value}`, {
      method: "DELETE",
    });
  }
}
</script>

<template>
  <h1>Activities</h1>

  <h2>Create activity</h2>
  <form @submit="onCreate">
    <input
      v-model="createActivity.name"
      type="text"
      placeholder="Name"
    />
    <input
      type="submit"
      name="Create"
    />
  </form>

  <h2>Read activity</h2>
  <form @submit="onRead">
    <input
      v-model="readId"
      type="text"
      placeholder="ID"
    />
    <input
      type="submit"
      name="Read"
    />
  </form>
  <table v-if="readActivity">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ readActivity.id }}</td>
        <td>{{ readActivity.name }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No activity to show.</p>

  <h2>Read activities</h2>
  <form @submit="onReadAll">
    <input
      type="submit"
      name="Read"
    />
  </form>
  <table v-if="readActivities.length > 0">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="activity in readActivities"
        :key="activity.id"
      >
        <td>{{ activity.id }}</td>
        <td>{{ activity.name }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No activities to show.</p>

  <h2>Update activity</h2>
  <form @submit="onUpdate">
    <input
      v-model="updateActivity.id"
      type="text"
      placeholder="ID"
    />
    <input
      v-model="updateActivity.name"
      type="text"
      placeholder="Name"
    />

    <input
      type="submit"
      name="Update"
    />
  </form>

  <h2>Delete activity</h2>
  <form @submit="onDelete">
    <input
      v-model="deleteId"
      type="text"
      placeholder="ID"
    />
    <input
      type="submit"
      name="Delete"
    />
  </form>
</template>
