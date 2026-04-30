from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_costs():
    return {'status': 'ok'}
