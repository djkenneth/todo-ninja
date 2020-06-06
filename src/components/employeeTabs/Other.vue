<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="6">
          <label>
            Are you related by consanguinity or affinity to the appointing or recommending authority, or to the
            chief of bureau or office or to the person who has immediate supervision over you in the Office,
            Bureau or Department where you will be appointed, within third degree?
          </label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>
            Are you related by consanguinity or affinity to the appointing or recommending authority, or to the
            chief of bureau or office or to the person who has immediate supervision over you in the Office,
            Bureau or Department where you will be appointed, within fourth degree? (for Local Government Unit -
            Career Employees)
          </label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Have you ever been found guilty of any administrative offense?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Have you been criminally charged before any court?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Criminally Charged Status</label>
          <v-row>
            <v-col>
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Have you ever been convicted of any crime or violation of any law, decree, ordinance or regulation by any court or tribunal?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Have you ever been separated from the service in any of the following modes: resignation, retirement, dropped from the rolls, dismissal, termination, end of term, finished contract or phased out (abolition) in the public or private sector?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Have you ever been a candidate in a national or local election held within the last year (except Barangay election)?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <label>Have you resigned from the government service during the three (3)-month period before the last election to promote/actively campaign for a national or local candidate?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Have you acquired the status of an immigrant or permanent resident of another country?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000 (RA 8972), please answer the following items:
          Are you a member of any indigenous group?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Are you a person with disability?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Are you a solo perent?</label>
          <v-row>
            <v-col cols="3" class="pr-0">
              <v-select label="Yes/No" outlined dense></v-select>
            </v-col>
            <v-col class="pl-0">
              <v-text-field label="IF YES, GIVE DETAILS" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Goverment ID Type</label>
          <v-row>
            <v-col>
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Government ID Number</label>
          <v-row>
            <v-col>
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Issued Date</label>
          <v-row>
            <v-col>
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <label>Issued Place</label>
          <v-row>
            <v-col>
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>