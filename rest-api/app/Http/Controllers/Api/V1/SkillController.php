<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Resources\V1\SkillCollection;
use App\Http\Resources\V1\SkillResource;
use Illuminate\Http\Request;
use App\Models\Skills;

class SkillController extends Controller
{
    public function index(){
      return new SkillCollection(Skills::all());
    }

    public function show(Skills $skill){
      return new SkillResource($skill);
    }

    public function store(StoreSkillRequest $request){
      Skills::create($request->validated());
      return response()->json("Skill Created");
    }

    public function update(StoreSkillRequest $request, Skills $skill){
      $skill->update($request->validated());
      return response()->json("Skill Updated");
    }

    public function destroy(Skills $skill){
      $skill->delete();

      return response()->json("Skill Deleted");
    }
}
