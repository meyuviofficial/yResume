import React from "react";
import "bulma/css/bulma.min.css";
import { Form } from "react-bulma-components";
import { Progress } from "semantic-ui-react";

const SkillsComponent = () => (
  <div class="container">
    <h3 class="title is-3">SKILLS</h3>
    <fieldset disabled>
      <div class="field">
        <label class="label">AZURE</label>
        <div class="control">
          <Progress percent={80} color="green" active>
            Active
          </Progress>
        </div>
      </div>
      <div class="field">
        <label class="label">AWS</label>
        <div class="control">
          <Progress percent={23} color="teal" active>
            Active
          </Progress>
        </div>
      </div>
      <div class="field">
        <label class="label">DATA STRUCTURES</label>
        <div class="control">
          <Progress percent={90} color="yellow" active>
            Active
          </Progress>
        </div>
      </div>
      <div class="field">
        <label class="label">DATABASE MANAGEMENT SYSTEMS</label>
        <div class="control">
          <Progress percent={63} color="grey-dark" active>
            Active
          </Progress>
        </div>
      </div>
    </fieldset>
  </div>
);

export default SkillsComponent;
