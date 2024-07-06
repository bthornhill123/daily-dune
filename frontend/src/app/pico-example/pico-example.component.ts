import { Component } from '@angular/core';

@Component({
  selector: 'app-pico-example',
  template: `
    <section>
      <hgroup>
        <h2>Pico CSS</h2>
        <h3>Examples from the class-less CSS design framework</h3>
      </hgroup>
    </section>

    <section>
      <h3>Typography</h3>
      <p><b>Bold</b></p>
      <p><mark>Highlighted</mark></p>
      <p><del>Deleted</del></p>
      <p><a href="#">Link</a></p>
      <p><a href="#" class="secondary">Link</a></p>
      <p><a href="#" class="contrast">Link</a></p>
      <blockquote>"Something SUPER inspirational."
        <footer>
          <cite>- Ben Thornhill</cite>
        </footer>
      </blockquote>
    </section>

    <section>
      <h3>Buttons</h3>
      <button>Button</button>
      <input type="submit">
      <a href="#" role="button">Link</a>
      <a href="#" role="button" class="secondary">Secondary</a>
      <a href="#" role="button" class="contrast">Contrast</a>
      <a href="#" role="button" class="outline">Primary</a>
      <a href="#" role="button" class="secondary outline">Secondary</a>
      <a href="#" role="button" class="contrast outline">Contrast</a>
    </section>

    <section>
      <h3>Forms</h3>
      <form>
        <div class="grid">
          <!-- Markup example 1: input is inside label -->
          <label for="firstname">
            First name
            <input type="text" id="firstname" name="firstname" placeholder="First name" required>
          </label>

          <label for="lastname">
            Last name
            <input type="text" id="lastname" name="lastname" placeholder="Last name" required>
          </label>
        </div>

        <!-- Markup example 2: input is after label -->
        <label for="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Email address" required>
        <small>We'll never share your email with anyone else.</small>

        <!-- Button -->
        <button type="submit">Submit</button>
      </form>
      
      <input type="text" placeholder="Valid" aria-invalid="false">
      <input type="text" placeholder="Invalid" aria-invalid="true">
      <input type="text" placeholder="Disabled" disabled>
      <input type="text" value="Readonly" readonly>
      <!-- Select -->
      <label for="fruit">Fruit</label>
      <select id="fruit" required>
        <option value="" selected>Select a fruit…</option>
        <option>…</option>
      </select>

      <!-- Radios -->
      <fieldset>
        <legend>Size</legend>
        <label for="small">
          <input type="radio" id="small" name="size" value="small" checked>
          Small
        </label>
        <label for="medium">
          <input type="radio" id="medium" name="size" value="medium">
          Medium
        </label>
        <label for="large">
          <input type="radio" id="large" name="size" value="large">
          Large
        </label>
        <label for="extralarge">
          <input type="radio" id="extralarge" name="size" value="extralarge" disabled>
          Extra Large
        </label>
      </fieldset>

      <!-- Checkboxes -->
      <fieldset>
        <label for="terms">
          <input type="checkbox" id="terms" name="terms">
          I agree to the Terms and Conditions
        </label>
        <label for="terms_sharing">
          <input type="checkbox" id="terms_sharing" name="terms_sharing" disabled checked>
          I agree to share my information with partners
        </label>
      </fieldset>

      <!-- Switches -->
      <fieldset>
        <label for="switch">
          <input type="checkbox" id="switch" name="switch" role="switch">
          Publish on my profile
        </label>
        <label for="switch_disabled">
          <input type="checkbox" id="switch_disabled" name="switch_disabled" role="switch_disabled" disabled checked>
          User must change password at next logon
        </label>
      </fieldset>
    </section>
  `,
})
export class PicoExampleComponent {

}
